import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/category.dto';
import { CreateProductDto } from './dto/product.dto';
import { AddProductToWishlistDto } from './dto/wishlist.dto';
import axios from 'axios';
import { AddProductToCart } from './dto/cart.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async addCategory(dto: CreateCategoryDto): Promise<{ message: string }> {
    const existingCategoryWithThisName = await this.prisma.categories.findFirst(
      {
        where: {
          name: dto.name,
        },
      },
    );
    if (existingCategoryWithThisName) {
      throw new BadRequestException('Category with this name is created');
    }
    await this.prisma.categories.create({
      data: { name: dto.name },
    });
    return { message: 'category created' };
  }
  async addProduct(dto: CreateProductDto): Promise<{ message: string }> {
    const product = await this.prisma.products.create({
      data: {
        name: dto.name,
        description: dto.description,
        price: dto.price,
        stock: dto.stock,
      },
    });
    await this.prisma.product_has_categories.create({
      data: {
        products: {
          connect: { id: product.id },
        },
        categories: {
          connect: { id: dto.category_id },
        },
      },
    });
    return { message: 'Product added' };
  }
  async addProductToWishlist(
    dto: AddProductToWishlistDto,
    headers: Record<string, string>,
  ): Promise<{ message: string }> {
    const authHeader = headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization token is missing');
    }

    const token = authHeader.replace('Bearer ', '');
    const requestData = {
      token: token,
    };
    try {
      const response = await axios.post(
        'http://localhost:3000/verifyToken',
        requestData,
      );

      if (response.status === 201) {
        await this.prisma.wishlist.create({
          data: {
            products: {
              connect: {
                id: dto.productId,
              },
            },
            users: {
              connect: {
                id: response.data.sub,
              },
            },
          },
        });
        return { message: 'Product successfully added to wishlist' };
      } else {
        return { message: 'Failed to add product to wishlist' };
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error.message);
    }
  }
  async addProductToCart(
    dto: AddProductToCart,
    headers: Record<string, string>,
  ): Promise<{ message: string }> {
    const authHeader = headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization token is missing');
    }
    const token = authHeader.replace('Bearer ', '');
    const requestData = {
      token: token,
    };
    try {
      const response = await axios.post(
        'http://localhost:3000/verifyToken',
        requestData,
      );
      if (response.status === 201) {
        const product = await this.prisma.products.findUnique({
          where: {
            id: dto.productId,
          },
        });
        await this.prisma.carts.create({
          data: {
            quantity: dto.quantity,
            price: Number(product.price) * dto.quantity,
            users: {
              connect: {
                id: response.data.sub,
              },
            },
            products: {
              connect: {
                id: dto.productId,
              },
            },
          },
        });
        return { message: 'Product successfully added to cart' };
      } else {
        return { message: 'Faild to  add product to cart' };
      }
    } catch (error) {
      console.log('Error adding product to cart', error.message);
    }
  }
}

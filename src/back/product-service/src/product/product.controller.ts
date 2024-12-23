import { Body, Controller, Post, Headers } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateCategoryDto } from './dto/category.dto';
import { CreateProductDto } from './dto/product.dto';
import { AddProductToWishlistDto } from './dto/wishlist.dto';

@Controller('')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('/category')
  async addCategory(
    @Body() dto: CreateCategoryDto,
  ): Promise<{ message: string }> {
    return this.productService.addCategory(dto);
  }
  @Post('/product')
  async addProduct(
    @Body() dto: CreateProductDto,
  ): Promise<{ message: string }> {
    return this.productService.addProduct(dto);
  }
  @Post('/wishlist')
  async addProductToWishlist(
    @Body() dto: AddProductToWishlistDto,
    @Headers() headers: Record<string, string>,
  ): Promise<{ message: string }> {
    return this.productService.addProductToWishlist(dto, headers);
  }
}

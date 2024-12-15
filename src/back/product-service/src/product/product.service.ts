import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/category.dto';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        private readonly prisma: PrismaService
    ){}
    async addCategory(dto:CreateCategoryDto):Promise<{message:string}>{
        const existingCategoryWithThisName = await this.prisma.categories.findFirst({
            where:{
                name: dto.name
            }
        })
        if(existingCategoryWithThisName){
            throw new BadRequestException("Category with this name is created")
        }
        await this.prisma.categories.create({
            data:{name:dto.name}
        })
        return {message:"category created"}
    }
    async addProduct(dto:CreateProductDto):Promise<{message:string}>{
        const product = await this.prisma.products.create({
            data:{name:dto.name, description:dto.description, price:dto.price,stock:dto.stock}
        })
        await this.prisma.product_has_categories.create({
            data:{
                products: {
                    connect:{id:product.id}
                },
                categories:{
                    connect:{id:dto.category_id}
                }
            }
    })
    return {message: "Product added"}
    }
    async addProductToWishlist()
}

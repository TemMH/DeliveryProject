import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateCategoryDto } from './dto/category.dto';
import {CreateProductDto} from "./dto/product.dto"

@Controller('')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post("/category")
  async addCategory(@Body() dto: CreateCategoryDto): Promise<{ message: string }> {
    return this.productService.addCategory(dto);
  }
  @Post("/product")
  async addProduct(@Body()dto:CreateProductDto):Promise<{message: string}>{
    return this.productService.addProduct(dto)
  }}

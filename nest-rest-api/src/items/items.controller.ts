import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {
  @Get()
  getItems(): string {
    return 'This action returns all items';
  }
  //   @Post()
  //   create(): string {
  //     return 'This action adds an item';
  //   }
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Description: ${createItemDto.description} Price: ${createItemDto.qty}`;
  }
  //long version
  // @Get(':id')
  // findOne(@Param() param): string {
  //   return `Item ${param.id}`;
  // }
  //shortend version
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }
  //for delete we need to pass the id
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item ${id} has been deleted`;
  }
}

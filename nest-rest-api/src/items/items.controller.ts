import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  getItems(): string {
    return 'This action returns all items';
  }
  @Post()
  create(): string {
    return 'This action adds an item';
  }
}

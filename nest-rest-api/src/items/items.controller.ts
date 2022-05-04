import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  getItems(): string {
    return 'This action returns all items';
  }
}

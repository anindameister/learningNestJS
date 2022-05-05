import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
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

  //this Post is not really helping put so commenting this temporarily
  //temporary phase over and now I would use this for PUT
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
  //this isn't really working, so am gonna use the dto for this
  // @Put(':id')
  // update(@Param('id') id): string {
  //   return `Item ${id} has been updated`;
  // }
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto): string {
    return `Name: ${updateItemDto.name} Description: ${updateItemDto.description} Price: ${updateItemDto.qty}`;
  }

  //created this post to help put but it didn't help so commenting this out
  // @Post()
  // create(@Body() createItemDto: CreateItemDto, @Param('id') id): string {
  //   return `Create ${id} - Name: ${createItemDto.name}`;
  // }
}

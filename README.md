# learningNestJS
- check node availability

![check node version](https://github.com/anindameister/learningNestJS/blob/main/photos/1.PNG)

- in order to remind you about the internet connection error experience, check out the below error snapshot

![internet connection problem](https://github.com/anindameister/learningNestJS/blob/main/photos/2.PNG)

```
nest --version
```
- so my version is `8.2.5`
- `nest new nest-rest-api`

- after running the above command it asked if `npm/yarn/others` - I chose `yarn` because I trust `codewithharry` and `vincent`

![selected yarn as package manager](https://github.com/anindameister/learningNestJS/blob/main/photos/3.PNG)

- now while commiting the code, got an error because the `.git` file also exists within the `nest-rest-api` folder
- in order to fix the problem, decided to get rid of the `.git` file inside `nest-rest-api` .. That didn't work because vscode is open. Let me close the vscode and try again. Got to take shortcuts if I have to finish fast as ordered by Vincent.

- let's get inside the folder, `nest-rest-api`, shall we?
- let's recall that `jest` is a `testing` platform
- we use a lot of `async/await` with `NestJs`

- `nest g controller items`
- `g` for generate controller
- and we want a controller called items
- we are dealing with items which would have a name, description and a quantity. 
- as result of the command `nest g controller items`, we got a folder called items and anything to do with `items` would go into the folder called `items`
- it also created a controller file under the folder items named `items.controller.ts` and a spec file for testing `but we are not gonna deal with that as of right now`
- `@` symbol is a `decorator` and we would see that all over the place when we're using typescript.
- These decorators are basically used for metadeta and so on
- we have class in the code now
```
import { Controller } from '@nestjs/common';

@Controller('items')
export class ItemsController {}
```
- we're going to create functions inside our class named `ItemsController`
- we need to start the server now, using `yarn`
- `https://classic.yarnpkg.com/en/docs/cli/run`
1. `yarn run`
2. `nest start`
3. check out the postman output ![postman](https://github.com/anindameister/learningNestJS/blob/main/photos/4.PNG)
4. this diagram would show `yarn` ![yarn](https://github.com/anindameister/learningNestJS/blob/main/photos/5.PNG)

Now, if we go to `/items` then there's nothing but we need to go to `/items` and get the desired output
- right now `/items` is giving `404 not found`
- now we have to `create an endpoint` and for that we need decorators
- let's use `nest start --watch`
- moving on, with the below code, we have the postman output
```
import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  getItems(): string {
    return 'This action returns all items';
  }
}
```
![items](https://github.com/anindameister/learningNestJS/blob/main/photos/6.PNG)

- `POST`
```
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
```
![POST](https://github.com/anindameister/learningNestJS/blob/main/photos/7.PNG)

- we need to send data through POST and in Nest, we need to create a `DTO` - a `data transfer object`

![DTO](https://github.com/anindameister/learningNestJS/blob/main/photos/8.PNG)

- created a folder named `dto` inside the `items` folder
- inside that we created `create-item-dto.ts`

- The next `POST` took a lot of effort
```
import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
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

}
```
![post for sending data, took some efforts](https://github.com/anindameister/learningNestJS/blob/main/photos/9.PNG)

- getting back to `GET` for an `id`
```
import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
  }


}
```

![getting back to get for an id](https://github.com/anindameister/learningNestJS/blob/main/photos/10.PNG)

- starting of `day 2`
- recollecting, where I left off yesterday

![id = 1700](https://github.com/anindameister/learningNestJS/blob/main/photos/11.PNG)

- shortend version works too

![shortend version works too](https://github.com/anindameister/learningNestJS/blob/main/photos/12.PNG)

- a particular information 

![a particular information](https://github.com/anindameister/learningNestJS/blob/main/photos/13.PNG)

- had to restart the server just to implement `Delete` successfully

![had to restart the server just to implement `Delete` successfully](https://github.com/anindameister/learningNestJS/blob/main/photos/14.PNG)

- `prettier and typescript` is not a nice girl

```
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

  @Put(':id')
  update(@Param('id') id): string {
    return `Item ${id} has been updated`;
  }
}
```

![GET](https://github.com/anindameister/learningNestJS/blob/main/photos/15.PNG)

- checkout the error in `PUT`

![PUT](https://github.com/anindameister/learningNestJS/blob/main/photos/16.PNG)

- checkout `POST`

![POST](https://github.com/anindameister/learningNestJS/blob/main/photos/17.PNG)

- problem and more problem

```
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
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }

  //created this post to help put but it didn't help so commenting this out
  // @Post()
  // create(@Body() createItemDto: CreateItemDto, @Param('id') id): string {
  //   return `Create ${id} - Name: ${createItemDto.name}`;
  // }
}
```

![problem and more problem](https://github.com/anindameister/learningNestJS/blob/main/photos/18.PNG)

- fixed the `POST` problem by restarting the server

![fixed the `POST` problem by restarting the server](https://github.com/anindameister/learningNestJS/blob/main/photos/19.PNG)

- finally fixed the `PUT` problem with the below code

```
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto): string {
    return `Name: ${updateItemDto.name} Description: ${updateItemDto.description} Price: ${updateItemDto.qty}`;
  }
```
- remember to get into the `watch` mode by `nest start --watch`

![successful PUT](https://github.com/anindameister/learningNestJS/blob/main/photos/20.PNG)

# Now, we need a `service` in order to deal with the database and get the `actual data` and things like that.

- command: `nest g service items`
- as a result, we have a `items.service.ts` file

```
import { Injectable } from '@nestjs/common';
//Injectable is a decorator that marks a class as one that can be injected as a dependency into our constructor.

@Injectable()
export class ItemsService {
  //in here, we are going to have a lot of functions that we are going to call from our controller
  //what is a controller?
  //A controller is a class that handles the HTTP requests for a particular resource.
  //what is the particular resource?
  //The resource is the data that is being manipulated by the controller.
}
```
- below is the code, being put in here because Miss Prettier is causing a pretty lot of problems
```
import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
```

- but before we proceed into the above part, we are gonna create a `module` in the `items` folder 
- the name of the file is `items.module.ts`
```
//this file going to be setup, very similar to the app.module.ts
//so we would copy the contents of the same file
```



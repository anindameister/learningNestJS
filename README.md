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

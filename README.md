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

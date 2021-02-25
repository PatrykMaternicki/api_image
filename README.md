# api_image
api_image

## Required:
- Cypress
- Jest
- Eslint
- Nodemon 

## How to start?
- First type type those commands

```js
npm install -g cypress
npm install -g nodemon
npm install -g eslint
npm install -g jest
npm run install
```

To start a API, write this command

```js
npm run start
```

## Other Command
- to run eslint

```js
npm run lint
```

- to run e2e testing
```js
npm run cypress
```

- to run unit testing
```js
npm run test
```

## Documentation

### Get image by:

```js
/api/image/?search=
```

#### Options:

- Allowed Params: `search`
- Required Params: `search`
- Nullable: false
- Errors: `REQUIRED_PARAM`, `NOT_ALLOWED_PARAM`, `INVALID_PARAM`

#### Output:

```js
{
    pixabay: {
      data: [],
      status: []
    },
    giphy: {
      data: [],
      status: []
    }
}
```

#### Error Output

```js
{
    info: 'REQUIRED_PARAM'
}

```



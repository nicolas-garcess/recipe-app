# Recipes aplication

This aplication allows you to search a lot of recipes to prepare your desire meal; you can enter a meal, health and cuisine type. You will find a picture of the plate, the recipe name and ingredients.

## Run the aplication

First you must clone the repository:

```
git clone https://github.com/nicolas-garcess/recipe-app.git
```

Or download the .zip file.

When you have the project in your desktop already, you must run in the terminal this command:

```
yarn start
```

To test the aplication run this command:

```
yarn test --coverage --watchAll
```

## Decisions

### Dependencies

1. "@testing-library/react-hooks" is used to test the hooks.
2. "msw" is used to mock the API fetch.
3. "react-router-dom" is used to manage the routing between pages.

### Technical decisions

1. The hook useReducer is used to manage the states of the aplication readily. 
2. Is used global context to a allow every component to access the information, avoiding a props flow through components.
3. The information was fetched from this public API: [Edamam](https://developer.edamam.com/).

## Deploy on heroku

You can try the application. [Recipes app]()



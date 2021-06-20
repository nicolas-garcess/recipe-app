# Recipes application

This application allows you to search form many recipes to prepare your desire meal; you can enter a meal, health, and type of cuisine. You will find a picture of the plate, the recipe name, and ingredients.

## Run the application

First, you have to clone the repository:

```
git clone https://github.com/nicolas-garcess/recipe-app.git
```

Or download the .zip file.

When you have the project on your desktop already, you have to run in the terminal:

```
yarn start
```

To test the application run this command:

```
yarn test --coverage --watchAll
```

## Decisions

### Dependencies

1. "@testing-library/react-hooks" is used to test the hooks.
2. "msw" is used to mock the API fetch.
3. "react-router-dom" is used to manage the routing between pages.

### Technical decisions

1. The hook useReducer is used to manage the states of the application readily. 
2. It used global context to allow every component to access the information, avoiding a props flow through components.
3. The data was fetched from this public API: [Edamam](https://developer.edamam.com/).

## Deploy on Heroku

You can try the application. [Recipes app](https://cookerybook-app.herokuapp.com/)



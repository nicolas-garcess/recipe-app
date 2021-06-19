import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createMemoryHistory } from 'history';
import recipes from '../MealInput/dataTest';
import App from '../../App';


describe('<Form /> validation', () => {
  let component;
  beforeEach(() => {
    component = render(
      <App />
    );
  });

  const server = setupServer(
    rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
      return res(ctx.json({"mock": "just a mock"}));
    })
  );
  
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });
  
  afterAll(() => {
    server.close();
  });

  test('Invalid meal', () => {
    const meal = component.container.querySelector('#meal');
    const search = component.getByText('search');

    fireEvent.change(meal, {
      target: {value: 'meat-'}
    });
    fireEvent.click(search);

    const error = component.container.querySelector('.show');
    const message = component.container.querySelector('.alert__message');

    expect(error).toBeInTheDocument();
    expect(message.innerHTML).toBe('Invalid format');
  });

  test('No results found', async () => {
    server.use(
      rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({"from":1,"to":0,"count":0,"_links":{},"hits":[]}));
      })
    );

    const meal = component.container.querySelector('#meal');
    const search = component.getByText('search');

    fireEvent.change(meal, {
        target: {value: 'abcdefg'}
    });
    fireEvent.click(search);
    
    await waitFor(() => screen.getByText('No results found'));

    const alertMessage = component.container.querySelector('.alert__message');
 
    expect(alertMessage.innerHTML).toBe('No results found');
  });

  test('Bad request', async () => {
    server.use(
      rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
        return res(ctx.status(400), ctx.json({}));
      })
    );

    const meal = component.container.querySelector('#meal');
    const search = component.getByText('search');

    fireEvent.change(meal, {
        target: {value: 'meat'}
    });
    fireEvent.click(search);
    
    await waitFor(() => screen.getByText('There was an error with the query. Keep trying'));

    const alertMessage = component.container.querySelector('.alert__message');
 
    expect(alertMessage.innerHTML).toBe('There was an error with the query. Keep trying');
  });

  test('Good request', async () => {
    server.use(
      rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(recipes));
      })
    );
    
    const history = createMemoryHistory();

    const meal = component.container.querySelector('#meal');
    const cuisine = component.container.querySelector('#cuisineType');
    const search = component.getByText('search');

    fireEvent.change(meal, {
      target: {value: 'jellyfish'}
    });
    fireEvent.change(cuisine, {
      target: {value: 'Indian'}
    });
    fireEvent.click(search);

    history.push('/recipes');

    await waitFor(() => screen.getByText('results'));

    expect(history.location.pathname).toBe('/recipes');
  });
});
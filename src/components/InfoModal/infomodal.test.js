import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App';
import { createMemoryHistory } from 'history';
import recipe from '../MealInput/dataTest';

describe('<InfoModal /> validation', () => {
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
 
  
test('Modal render', async () => {
    server.use(
      rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(recipe));
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

    const moreInfoButton = component.container.querySelector('.card__info');
    fireEvent.click(moreInfoButton);

    const modal = component.container.querySelector('.article');
    const modalTitle = component.container.querySelector('.article__title');
    const cuisineType = component.container.querySelector('.cuisine');
    const modalImage = component.container.querySelector('.article__img');
    const ingredientTitle = component.container.querySelector('.ingredient-title');
    const ingridient = component.container.querySelector('.ingredient');
 
    expect(modal).toBeInTheDocument();
    expect(modalTitle.innerHTML).toBe('Jellyfish Salad');
    expect(modalImage).toBeInTheDocument();
    expect(cuisineType.innerHTML).toBe('cuisine type');
    expect(ingredientTitle).toBeInTheDocument();
    expect(ingridient).toBeInTheDocument();
    expect(screen.getByText('full recipe')).toBeInTheDocument();
  });
});

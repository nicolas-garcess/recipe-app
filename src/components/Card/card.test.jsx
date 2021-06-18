import { render, fireEvent } from '@testing-library/react';
import recipe from '../MealInput/dataTest';
import Card from './';

const setUp = () => {
  const component = render(<Card info={recipe.hits[0]} />);

  return { component };
};

describe('<Card /> validation', () => {
  /*let component;
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
 
  test('Card render', async () => {
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

    const card = component.container.querySelector('.card');
    const cardImage = component.container.querySelector('.card__img');
    const cardTitle = component.container.querySelector('.card__title');
    const moreInfo = component.container.querySelector('.card__info');
 
    expect(card).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardTitle.innerHTML).toBe('Jellyfish Salad');
    expect(moreInfo).toBeEnabled();
  });*/

  test('Card visualization', () => {
    const { component } = setUp();

    const card = component.container.querySelector('.card');
    const cardImage = component.container.querySelector('.card__img');
    const cardTitle = component.container.querySelector('.card__title');
    const moreInfo = component.container.querySelector('.card__info');
 
    expect(card).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardTitle.innerHTML).toBe('Jellyfish Salad');
    expect(moreInfo).toBeEnabled();
  });

  test.skip('Mock click button', () => {
    const { component } = setUp();

    const infoButton = component.container.querySelector('.card__info');
    fireEvent.click(infoButton);
  });
});


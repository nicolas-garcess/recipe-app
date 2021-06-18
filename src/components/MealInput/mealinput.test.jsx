import { render, fireEvent, screen } from '@testing-library/react';
import MealInput from './';

/*describe('<MealInput /> validation', () => {
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

  test('Empty meal', () => {
    const meal = component.container.querySelector('#meal');

    fireEvent.change(meal, {
      target: {value: 'meat'}
    });
    fireEvent.change(meal, {
        target: {value: ''}
    });

    const errorSpan = component.container.querySelector('.show');
    const errorMessage = component.getByText('Input is empty');

    expect(errorSpan).toBeInTheDocument();
    expect(errorMessage.innerHTML).toBe('Input is empty');
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
 
    expect(history.location.pathname).toBe('/recipes');
  });
});*/

describe('<MealInput /> validation', () => {
  test('Enter a valid meal', () => {
    let mockValidation = jest.fn();
    render(
      <MealInput
        mealValidation={mockValidation}
        isEmpty={false}
        invalid={false}
        invalidMessage=''
      />
    );
    
    const health = screen.getByTestId('meal-change');
    fireEvent.change(health, {target: {value: 'sushi'}});

    expect(mockValidation).toHaveBeenCalledTimes(1);
    expect(health.value).toBe('sushi');
  });

  test('Enter an empty meal', () => {
    let mockValidation = jest.fn();
    render(
      <MealInput
        mealValidation={mockValidation}
        isEmpty={true}
        invalid={false}
        invalidMessage='Input is empty'
      />
    );
    
    const health = screen.getByTestId('meal-change');
    fireEvent.change(health, {target: {value: 'meat'}});
    fireEvent.change(health, {target: {value: ''}});

    const errorMessage = screen.getByTestId('error-message');

    expect(mockValidation).toHaveBeenCalledTimes(2);
    expect(errorMessage.innerHTML).toBe('Input is empty');
  });
});
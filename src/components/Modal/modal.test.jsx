import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App';
import { createMemoryHistory } from 'history';
import recipe from '../MealInput/dataTest';
import Modal from './';

describe('<Modal /> validation', () => {
  test('Close modal by click on icon', () => {
    const closeMock = jest.fn();
    render(<Modal isOpen={true} closeModal={closeMock}><h1>Mock title</h1></Modal>);

    const closeContainer = screen.getByTestId('close-container');
    fireEvent.click(closeContainer);

    expect(closeMock).toHaveBeenCalled();
  });

  test('Close modal by click outside', () => {
    const closeMock = jest.fn();
    render(<Modal isOpen={true} closeModal={closeMock}><h1>Mock title</h1></Modal>);

    const modal = screen.getByTestId('modal');
    fireEvent.click(modal);

    expect(closeMock).toHaveBeenCalled();
  });

  /*test('Modal is still open', () => {
    const closeMock = jest.fn();
    const stopPropagationMock = jest.fn();
    render(<Modal isOpen={true} closeModal={closeMock}><h1>Mock title</h1></Modal>);

    const dialog = screen.getByTestId('modal__dialog');
    fireEvent.click(dialog);

    expect(stopPropagationMock).to

  });*/

});

describe.skip('<Modal /> revalidation', () => {
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
  
  afterAll(() => {
    server.close();
  });
  
  afterEach(() => {
    component = null;
    server.resetHandlers();
  });
  
  test('Modal close', async () => {
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

    const modalBody = component.container.querySelector('.modal__dialog');
    fireEvent.click(modalBody);

    const modal = component.container.querySelector('.article');

    expect(modal).toBeInTheDocument();
  });
});

import { render, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('<MealInput /> validation', () => {
  let component;
  beforeEach(() => {
    component = render(
      <App />
    );
  });

  test('Invalid meal', () => {
    const meal = component.container.querySelector('#meal');
    const button = component.getByText('search');

    fireEvent.change(meal, {
      target: {value: 'meat-'}
    });
    fireEvent.click(button);

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

  test('No results found', () => {
    const meal = component.container.querySelector('#meal');
    // const button = component.getByText('search');

    fireEvent.change(meal, {
        target: {value: 'asdfreee'}
    });
    
    const alert = component.container.querySelector('.alert__dialog');
    const alertMessage = component.container.querySelector('.alert__message');
    //console.log(alertMessage)

    expect(alert).toBeInTheDocument();
    expect(alertMessage.innerHTML).toBe('No results found');
  });
});
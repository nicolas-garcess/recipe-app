import { render, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('<CuisineType /> validation', () => {
  let component;
  beforeEach(() => {
    component = render(
      <App />
    );
  });

  test('Cuisine type input', () => {
    const cuisineType = component.container.querySelector('#cuisineType');
    
    fireEvent.change(cuisineType, {target: {value: 'Japanese'}});

    expect(cuisineType.value).toBe('Japanese');
  });
});
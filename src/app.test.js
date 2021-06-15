import { render } from '@testing-library/react';
import App from './App';

const setUp = () => {
  const component = render(<App />);
  const meal = component.container.querySelector('#meal');
  const health = component.container.querySelector('#health');
  const cuisine = component.container.querySelector('#cuisineType');
  const search = component.container.querySelector('.search-container');
  const form = component.container.querySelector('.form');

  return { meal, health, cuisine, search, form, component};
};

describe('Form validation', () => {
  test('render form', () => {
      const { meal, health, cuisine, search, form } = setUp();

      expect(meal).toBeInTheDocument();
      expect(health).toBeInTheDocument();
      expect(cuisine).toBeInTheDocument();
      expect(search).toBeInTheDocument();
      expect(form).toBeInTheDocument();
  });
});
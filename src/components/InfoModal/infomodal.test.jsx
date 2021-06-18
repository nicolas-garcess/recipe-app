import { render, screen } from '@testing-library/react';
import recipe from '../MealInput/dataTest';
import InfoModal from './';

describe('<InfoModal /> validation', () => {
  test('Modal render', () => {
    let component = render(<InfoModal info={recipe.hits[0]} />);

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

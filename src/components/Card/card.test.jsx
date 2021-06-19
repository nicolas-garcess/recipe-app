import { render, screen } from '@testing-library/react';
import recipe from '../MealInput/dataTest';
import Card from './';

const setUp = () => {
  const component = render(<Card info={recipe.hits[0]} />);

  return { component };
};

describe('<Card /> validation', () => {
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

  test('Spy click on button', () => {
    setUp();

    const infoButton = screen.getByText('more info');

    jest.spyOn(infoButton, 'click')
    infoButton.click();

    expect(infoButton.click).toHaveBeenCalledTimes(1);
  });
});


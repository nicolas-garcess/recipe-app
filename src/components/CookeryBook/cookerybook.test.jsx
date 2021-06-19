import { render, screen } from '@testing-library/react';
import recipes from '../MealInput/dataTest';
import  { StoreContext } from '../Store/StoreProvider';
import CookeryBook from './';

const customRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <StoreContext.Provider {...providerProps}>
      {ui}
    </StoreContext.Provider>,
    renderOptions
  );
};

describe('<CookeryBook /> validation', () => {
  test('CookeryBook visualization', () => {
    const providerProps = {
      value: [{recipes: recipes.hits}, null],
    };

    customRender(<CookeryBook />, { providerProps });

    expect(screen.getByTestId('cookerybook')).toBeInTheDocument();
    expect(screen.getByTestId('recipes')).toBeInTheDocument();
  });

  test('Call sessionStorage', () => {
    jest.spyOn(sessionStorage.__proto__, 'setItem');
    jest.spyOn(sessionStorage.__proto__, 'getItem');
    jest.spyOn(sessionStorage.__proto__, 'removeItem');

    const providerProps = {
      value: [{recipes: recipes.hits}, null],
    };

    customRender(<CookeryBook />, { providerProps });

    expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('recipes', JSON.stringify(recipes.hits));
    expect(sessionStorage.getItem).toHaveBeenCalledTimes(1);
    expect(sessionStorage.removeItem).not.toHaveBeenCalled();
  });
});



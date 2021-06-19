import { render, fireEvent, screen } from '@testing-library/react';
import Search from './';

/*describe('<Search /> validation', () => {
  let component;
  beforeEach(() => {
    component = render(
      <App />
    );
  });

  test('No input enter', () => {
    const search = component.container.querySelector('.search-container__button');
    
    fireEvent.click(search);

    expect(search).toBeDisabled();
  });

  test('Enter a meal', () => {
    const search = component.container.querySelector('.search-container__button');
    const meal = component.container.querySelector('#meal');
      
    fireEvent.change(meal, {target: {value: 'pizza'}});

    expect(search).toBeEnabled();
  });

  test('Enter a health type', () => {
    const search = component.container.querySelector('.search-container__button');
    const health = component.container.querySelector('#health');
      
    fireEvent.change(health, {target: {value: 'low sugar'}});

    expect(search).toBeEnabled();
  });

  test('Enter a cuisine type', () => {
    const search = component.container.querySelector('.search-container__button');
    const health = component.container.querySelector('#cuisineType');
      
    fireEvent.change(health, {target: {value: 'Mexican'}});

    expect(search).toBeEnabled();
  });
});*/

describe('<Search /> validation', () => {
  test('Search button is disabled', () => {
    let mockSearch = jest.fn();
    render(
      <Search
        searchInfo={mockSearch}
        isDisable={true}
      />
    );

    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(searchButton).toBeDisabled();
    expect(mockSearch).toHaveBeenCalledTimes(0);
    expect(searchButton).not.toHaveClass('enable');
  });

  test('Search button is enable', () => {
    let mockSearch = jest.fn();
    render(
      <Search
        searchInfo={mockSearch}
        isDisable={false}
      />
    );
    
    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);
    
    expect(searchButton).toBeEnabled();
    expect(mockSearch).toHaveBeenCalledTimes(1);
    expect(searchButton).toHaveClass('enable');
  });
});
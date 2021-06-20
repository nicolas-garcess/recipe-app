import { render, fireEvent, screen } from '@testing-library/react';
import Search from './';

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
import { render, fireEvent, screen } from '@testing-library/react';
import CuisineType from './';

describe('<CuisineType /> validation', () => {
  test('Change value of cuisine type', () => {
    let mockValidation = jest.fn();
    render(
      <CuisineType
        name="cuisineType"
        inputValidation={mockValidation}
        invalid={false}
        invalidMessage=""
      />
    );
    
    const inputCuisine = screen.getByTestId('list-change');
    fireEvent.change(inputCuisine, {target: {value: 'Japanese'}});

    expect(mockValidation).toHaveBeenCalledTimes(1);
    expect(inputCuisine.value).toBe('Japanese');
  });

  test('Invalid cuisine type', () => {
    let mockValidation = jest.fn();
    render(
      <CuisineType
        name="cuisineType"
        inputValidation={mockValidation}
        invalid={true}
        invalidMessage="Invalid option"
      />
    );
    
    const inputCuisine = screen.getByTestId('list-change');
    fireEvent.change(inputCuisine, {target: {value: 'abcdfeg'}});

    const errorMessage = screen.getByTestId('error-message');

    expect(mockValidation).toHaveBeenCalledTimes(1);
    expect(errorMessage).toBeInTheDocument();
  });
});
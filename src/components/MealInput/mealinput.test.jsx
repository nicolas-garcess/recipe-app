import { render, fireEvent, screen } from '@testing-library/react';
import MealInput from './';

describe('<MealInput /> validation', () => {
  test('Enter a valid meal', () => {
    let mockValidation = jest.fn();
    render(
      <MealInput
        mealValidation={mockValidation}
        isEmpty={false}
        invalid={false}
        invalidMessage=''
      />
    );
    
    const health = screen.getByTestId('meal-change');
    fireEvent.change(health, {target: {value: 'sushi'}});

    expect(mockValidation).toHaveBeenCalledTimes(1);
    expect(health.value).toBe('sushi');
  });

  test('Enter an empty meal', () => {
    let mockValidation = jest.fn();
    render(
      <MealInput
        mealValidation={mockValidation}
        isEmpty={true}
        invalid={false}
        invalidMessage='Input is empty'
      />
    );
    
    const health = screen.getByTestId('meal-change');
    fireEvent.change(health, {target: {value: 'meat'}});
    fireEvent.change(health, {target: {value: ''}});

    const errorMessage = screen.getByTestId('error-message');

    expect(mockValidation).toHaveBeenCalledTimes(2);
    expect(errorMessage.innerHTML).toBe('Input is empty');
  });
});
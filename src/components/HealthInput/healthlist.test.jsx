import { render, fireEvent, screen } from '@testing-library/react';
import HealthInput from './';

/*describe('<HealthList /> validation', () => {
  let component;
  beforeEach(() => {
    component = render(
      <App />
    );
  });

  test('Health input', () => {
    const health = component.container.querySelector('#health');
    
    fireEvent.change(health, {target: {value: 'alcohol-free'}});

    expect(health.value).toBe('alcohol-free');
  });
});*/

describe('<HealthList /> validation', () => {
  test('Change value of health', () => {
    let mockValidation = jest.fn();
    render(
      <HealthInput
        name="health"
        inputValidation={mockValidation}
        invalid={false}
        invalidMessage=""
      />
    );
    
    const inputHealth= screen.getByTestId('list-change');
    fireEvent.change(inputHealth, {target: {value: 'vegan'}});

    expect(mockValidation).toHaveBeenCalledTimes(1);
    expect(inputHealth.value).toBe('vegan');
  });

  test('Invalid cuisine type', () => {
    let mockValidation = jest.fn();
    render(
      <HealthInput
        name="health"
        inputValidation={mockValidation}
        invalid={true}
        invalidMessage="Invalid option"
      />
    );
    
    const inputHealth = screen.getByTestId('list-change');
    fireEvent.change(inputHealth, {target: {value: 'abcdfeg'}});

    const errorMessage = screen.getByTestId('error-message');

    expect(mockValidation).toHaveBeenCalledTimes(1);
    expect(errorMessage).toBeInTheDocument();
  });
});
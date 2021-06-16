import { render, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('<HealthList /> validation', () => {
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
});
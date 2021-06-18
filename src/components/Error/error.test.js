import { render, screen } from '@testing-library/react';
import { BrowserRouter as BRouter } from 'react-router-dom';
import Error from './';

describe('<Error /> validation', () => {
  let component = render(
    <BRouter>
      <Error />
    </BRouter>
  );
  
  test('Error render', async () => {
    const errorTitle = screen.getByText('404');
    const errorSubtitle = screen.getByText('not found');
    const homeTag = component.container.querySelector('.home');
    
    expect(errorTitle).toBeInTheDocument();
    expect(errorSubtitle).toBeInTheDocument();
    expect(homeTag.href).toBe('http://localhost/');
  });
});

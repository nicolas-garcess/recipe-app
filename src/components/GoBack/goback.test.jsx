import { render, screen } from '@testing-library/react';
import { BrowserRouter as BRouter } from 'react-router-dom';
import GoBack from '.';

describe('<GoBack /> validation', () => {
  test('Goback render', async () => {
    render(
      <BRouter>
        <GoBack />
      </BRouter>
    );

    expect(screen.getByText('go back')).toBeInTheDocument();
    expect(screen.getByText('go back').href).toBe('http://localhost/');
  });
});

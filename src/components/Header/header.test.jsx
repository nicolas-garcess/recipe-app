import { render, screen } from '@testing-library/react';
import { BrowserRouter as BRouter } from 'react-router-dom';
import Header from './';

describe('<Header /> validation', () => {
  test('Header render', () => {
    render(
      <BRouter>
        <Header title="results" />
      </BRouter>
    );

    expect(screen.getByText('results')).toBeInTheDocument();
  });
});


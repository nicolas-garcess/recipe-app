import { render, fireEvent, screen } from '@testing-library/react';
import Alert from './';

describe('<Alert /> validation', () => {
  test('Message visualization', () => {
    render(<Alert message={'Invalid message'} invalid={true}/>);

    const alertButton = screen.getByText('Invalid message');

    expect(alertButton.innerHTML).toBe('Invalid message');
  });

  test('Close alert', () => {
    const alertMock = jest.fn();
    render(<Alert message={'Invalid message'} invalid={true} closeAlert={alertMock} />);

    const alertButton = screen.getByTestId('alert__button');
    fireEvent.click(alertButton);

    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  test('Alert is active', () => {
    render(<Alert message={'Invalid message'} invalid={true} />);

    const alert = screen.getByTestId('alert');

    expect(alert).toHaveClass('alert-open')
  });

  test('Alert is not active', () => {
    render(<Alert message={'Invalid message'} invalid={false} />);

    const alert = screen.getByTestId('alert');

    expect(alert).not.toHaveClass('alert-open');
  });
});


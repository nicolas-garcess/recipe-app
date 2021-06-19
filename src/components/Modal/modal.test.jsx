import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './';

describe('<Modal /> validation', () => {
  test('Close modal by click on icon', () => {
    const closeMock = jest.fn();
    render(
      <Modal isOpen={true} closeModal={closeMock}>
        <h1>Mock title</h1>
      </Modal>
    );

    const closeContainer = screen.getByTestId('close-container');
    fireEvent.click(closeContainer);

    expect(closeMock).toHaveBeenCalled();
  });

  test('Close modal by click outside', () => {
    const closeMock = jest.fn();
    render(
      <Modal isOpen={true} closeModal={closeMock}>
        <h1>Mock title</h1>
      </Modal>
    );

    const modal = screen.getByTestId('modal');
    fireEvent.click(modal);

    expect(closeMock).toHaveBeenCalled();
  });

  test('Modal is still open', () => {
    render(
      <Modal isOpen={true}>
        <h1>Mock title</h1>
      </Modal>
    );
    const dialog = screen.getByTestId('modal__dialog');

    jest.spyOn(dialog, 'click')
    dialog.click();

    expect(dialog.click).toHaveBeenCalledTimes(1);
  });
});

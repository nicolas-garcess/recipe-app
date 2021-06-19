import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./";

describe('<Pagination /> validation', () => {
  test('Choose page', () => {
    const paginateMock = jest.fn();
    render(
      <Pagination
        recipesPerPage={4}
        allRecipe={20}
        paginate={paginateMock}
        curretPage={2}
      />
    );

    const page = screen.getByTestId('2-page');
    fireEvent.click(page);

    expect(paginateMock).toHaveBeenCalledTimes(1);
    expect(page).toHaveAttribute('aria-current');
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
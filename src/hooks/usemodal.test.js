import useModal from "./useModal";
import { act, renderHook } from '@testing-library/react-hooks';

describe('useModal validation', () => {
  test('Open modal', () => {
    const { result } = renderHook(useModal);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

  test('Close modal', () => {
    const { result } = renderHook(useModal);

    act(() => {
      result.current[1]();
      result.current[2]();
    });

    expect(result.current[0]).toBe(false);
  });
});
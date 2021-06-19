import useAlert from "./useAlert";
import { act, renderHook } from '@testing-library/react-hooks';

describe('useAlert validation', () => {
  test('Open alert', () => {
    const { result } = renderHook(useAlert);

    act(() => {
      result.current.enableAlert('Error');
    });

    expect(result.current.alert).toStrictEqual({message: 'Error', invalid: true});
  });

  test('Close alert', () => {
    const { result } = renderHook(useAlert);

    act(() => {
      result.current.closeAlert();
    });

    expect(result.current.alert).toStrictEqual({message: '', invalid: false});
  });
});
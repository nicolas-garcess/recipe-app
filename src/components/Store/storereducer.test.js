import { useReducer } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import storeReducer, { initialStore, TYPES } from './storeReducer';
import recipes from '../MealInput/dataTest';

describe('storeReducer validation', () => {
  test('State should change', () => {
    const { result } = renderHook(() => useReducer(storeReducer, initialStore));
    const [, dispatch] = result.current;

    act(() => {
      dispatch({
        type: TYPES.FETCH_DATA,
        payload: recipes.hits,
      });
      
    });

    expect(result.current[0].recipes).toStrictEqual(recipes.hits);
  });

  test('State should be the same', () => {
    const { result } = renderHook(() => useReducer(storeReducer, initialStore));
    const [, dispatch] = result.current;

    act(() => {
      dispatch({
        type: 'foo',
        payload: recipes.hits,
      });
      
    });

    expect(result.current[0].recipes).toStrictEqual([]);
  });
});
import chooseList from './';
import health from './healthList';
import cuisine from './cuisineList';

describe('Choose List validation', () => {
  test('Return undefined because any of the list was called', () => {
    expect(chooseList('whatever')).toBeUndefined();
  });

  test('Should return health list', () => {
    expect(chooseList('health')).toBe(health);
  });

  test('Should return cuisine list', () => {
    expect(chooseList('cuisineType')).toBe(cuisine);
  });

});
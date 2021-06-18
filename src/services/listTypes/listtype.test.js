import chooseList from './';

describe('Choose List validation', () => {
  test('Return undefined because any of the list was called', () => {
    expect(chooseList('whatever')).toBeUndefined();
  });

});
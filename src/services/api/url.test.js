import makeURL from './url';

describe('MakeURL validation', () => {
  test('Url with meal input', () => {
    const form = {
        meal: {
          value: 'pizza',
          isEmpty: false,
          invalid: false,
          invalidMessage: '',
        },
        health: {
          value: '',
          invalid: false,
          invalidMessage: '',
        },
        cuisineType: {
          value: '',
          invalid: false,
          invalidMessage: '',
        },
        search: {
          disable: true,
        },
      };

    expect(makeURL(form)).toBe('https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=ccdedd84&app_key=99f4720abfe124d1e696c539b77ec27c');
  });

  test('Url with meal and health input', () => {
    const form = {
        meal: {
          value: 'sushi',
          isEmpty: false,
          invalid: false,
          invalidMessage: '',
        },
        health: {
          value: 'vegan',
          invalid: false,
          invalidMessage: '',
        },
        cuisineType: {
          value: '',
          invalid: false,
          invalidMessage: '',
        },
        search: {
          disable: true,
        },
    };

    expect(makeURL(form)).toBe('https://api.edamam.com/api/recipes/v2?type=public&q=sushi&app_id=ccdedd84&app_key=99f4720abfe124d1e696c539b77ec27c&health=vegan');
  });

  test('Url with meal, health and cuisine type input', () => {
    const form = {
        meal: {
          value: 'sushi',
          isEmpty: false,
          invalid: false,
          invalidMessage: '',
        },
        health: {
          value: 'vegan',
          invalid: false,
          invalidMessage: '',
        },
        cuisineType: {
          value: 'Japanese',
          invalid: false,
          invalidMessage: '',
        },
        search: {
          disable: true,
        },
    };

    expect(makeURL(form)).toBe('https://api.edamam.com/api/recipes/v2?type=public&q=sushi&app_id=ccdedd84&app_key=99f4720abfe124d1e696c539b77ec27c&health=vegan&cuisineType=Japanese');
  });
});
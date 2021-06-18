import fetchAPI from './fetchAPI';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

describe('Fetch API validation', () => {
  const server = setupServer(
    rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
      return res(ctx.json({"mock": "just a mock"}));
    })
  );
    
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });
    
  afterAll(() => {
    server.close();
  });

  test('Good response', async () => {
    server.use(
      rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({"from":1,"to":0,"count":0,"_links":{},"hits":[]}));
      })
    );

    const data = await fetchAPI('https://api.edamam.com/api/recipes/v2');

    expect(data).toStrictEqual({"from":1,"to":0,"count":0,"_links":{},"hits":[]});
  });

  test('Bad response', async () => {
    server.use(
      rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
        return res(ctx.status(400), ctx.json({}));
      })
    );

    const data = await fetchAPI('https://api.edamam.com/api/recipes/v2');

    expect(data).toBeNull();
  });
});
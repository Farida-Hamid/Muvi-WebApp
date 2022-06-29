import { getMovies, API_URL } from './getMovies.js';

describe('Test counters:', () => {
  test('1. Check movie counter', async () => {
    const data = await getMovies(API_URL);
    expect(data.length).toBe(20);
  });
});
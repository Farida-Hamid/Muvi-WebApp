import movieCount from './movieCounter.js'

test('1. Check comment counter', async () => {
  const data = await movieCount(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  expect(data).toBe(7);
});
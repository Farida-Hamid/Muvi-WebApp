import countComments from './commentCounter.js';

test('1. Check comment counter', async () => {
  const data = await countComments([1, 2, 3, 4, 5]);
  expect(data).toBe(5);
});
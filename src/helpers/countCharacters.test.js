const countCharacters = require('./countCharacters');

test('There are 4 \'a\' in string \'abnoteateouaeua\'', () => {
  const result = countCharacters('a', 'abnoteateouaeua');

  expect(result).toBe(4);
});

test('There are 0 \'z\' in string \'abnoteateouaeua\'', () => {
  const result = countCharacters('z', 'abnoteateouaeua');

  expect(result).toBe(0);
});

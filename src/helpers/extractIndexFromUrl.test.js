const { extractIndexFromUrl } = require('./extractIndexFromUrl');

test('Get 2 from \'https://rickandmortyapi.com/api/character/2\'', () => {
  const result = extractIndexFromUrl('https://rickandmortyapi.com/api/character/2');

  expect(result).toBe(2);
});

test('Get 28 from \'https://rickandmortyapi.com/api/character/28\'', () => {
  const result = extractIndexFromUrl('https://rickandmortyapi.com/api/character/28');

  expect(result).toBe(28);
});

test('Get 234 from \'https://rickandmortyapi.com/api/character/234\'', () => {
  const result = extractIndexFromUrl('https://rickandmortyapi.com/api/character/234');

  expect(result).toBe(234);
});


test('Get 2 from \'https://rickandmortyapi.com/api/character\'', () => {
  const result = extractIndexFromUrl('https://rickandmortyapi.com/api/character');

  expect(result).toBeNull();
});

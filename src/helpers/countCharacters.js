const countChar = (char, word) => {
  const regex = new RegExp(char, 'gi');
  let counter = 0;

  while (regex.exec(word) !== null) {
    counter += 1;
  }

  return counter;
};

module.exports = countChar;

const CharCounter = require('./exercises/CharCounter');
const getData = require('./getData');
const withDuration = require('./helpers/withDuration');

const resolveCharCounter = async () => {
  const data = await getData();
  const result = await withDuration(CharCounter(data));
  console.log(result);
};

resolveCharCounter();

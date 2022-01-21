/**
 *  add the execution time of a function that returns an object
 *  @param {() => ({})} callback
 */
const withDuration = async (callback) => {
  const startTime = Date.now();

  const result = await callback();

  const duration = Date.now() - startTime;

  const seconds = Math.floor(duration / 1000);
  const miliSeconds = duration - seconds * 1000;
  const time = `${seconds}s ${miliSeconds}ms`;

  if (process.env.NODE_ENV !== 'test') {
    return { ...result, time };
  }

  return { duration: Math.floor(duration), time };
};

module.exports = withDuration;

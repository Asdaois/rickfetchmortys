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
  const inTime = seconds < 3;

  if (process.env.NODE_ENV !== 'test') {
    const { exerciseName, results } = result;
    return {
      exercise_name: exerciseName, time, in_time: inTime, results,
    };
  }

  return { duration: Math.floor(duration), time };
};

module.exports = withDuration;

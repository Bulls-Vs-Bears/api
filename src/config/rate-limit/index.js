export const setRateLimit = function(timeWindow, max, redis = null) {
  return {
    timeWindow, // milliseconds
    max,
    redis,
  };
};

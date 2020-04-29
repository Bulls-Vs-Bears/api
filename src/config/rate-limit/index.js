export function setRateLimit(timeWindow, max, redis = null) {
  return {
    timeWindow, // milliseconds
    max,
    redis,
  };
}

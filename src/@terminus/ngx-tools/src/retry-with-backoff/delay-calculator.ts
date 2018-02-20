/**
 * The allowed options object for `exponentialBackoffDelayCalculator`
 */
export interface DelayCalculator {
  jitter: boolean;
  jitterFactor: number;
  backOffFactor: number;
  baseWaitTime: number;
}


/**
 * Calculate retry timing
 *
 * `jitter`: "Slight irregular movement, variation, or unsteadiness,
 * especially in an electrical signal or electronic device"
 *
 * @param options - The options object
 *   - `jitter`: If the duration should be affected by a jitter effect
 *   - `jitterFactor`: How widely the jitter effect should vary
 *   - `backOffFactor`: How quickly the duration should back off
 *   - `baseWaitTime`: The base time when determining sleep duration
 * @return The duration to sleep
 */
export const exponentialBackoffDelayCalculator = ({
  jitter = true,
  jitterFactor = .3,
  backOffFactor = 2,
  baseWaitTime = 100,
}: Partial<DelayCalculator>) => {
  return function(attempt: number) {
    let sleepDuration = baseWaitTime * Math.pow(backOffFactor, attempt);

    if (jitter) {
      sleepDuration *= (1 - jitterFactor * Math.random());
    }

    return sleepDuration;
  }
}

import { MonoTypeOperatorFunction, range, timer , throwError } from 'rxjs';
import { mergeMap, retryWhen, zip } from 'rxjs/operators';

import { exponentialBackoffDelayCalculator } from './delay-calculator';


/**
 * The options object that can be passed to `retryWithBackoff`
 */
export interface RetryWithBackoff {
  retries: number;
  delayCalculator: (attempt: number) => number;
}


/**
 * Return the difference in time in words
 *
 * @example
 * return this.exampleDatabase.getSomething()
 *   .pipe(
 *     map((res: MyResponse) => {
 *       if (res) {
 *         return res;
 *       } else {
 *         return null;
 *       }
 *     }),
 *     retryWithBackoff({}), // Using default options
 *   )
 * ;
 *
 * @param options - The options object
 *   - `retries`: How many times it should retry before throwing an error
 *   - `delayCalculator`: The calculator to determine the delay timing
 * @return The observable timer
 */
export function retryWithBackoff<T>({
  retries = 3,
  delayCalculator = exponentialBackoffDelayCalculator({}),
}: Partial<RetryWithBackoff>): MonoTypeOperatorFunction<T> {

  return retryWhen((errors) =>
    errors.pipe(
      zip(range(1, retries)),
      mergeMap(([err, retry]) => {
        if (retry >= retries) {
          return throwError(err);
        }

        return timer(delayCalculator(retry));
      }),
    ),
  );
}

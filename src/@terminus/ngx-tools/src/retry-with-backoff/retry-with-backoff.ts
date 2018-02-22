import { MonoTypeOperatorFunction } from 'rxjs/interfaces'
// NOTE(B$): Rollup seems to choke when using `_throw` with an error saying `'_throw' is not
// exported by node_modules/rxjs/observable/throw.js
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { range } from 'rxjs/observable/range';
import { retryWhen } from 'rxjs/operators/retryWhen';
import { timer } from 'rxjs/observable/timer';
import { zip } from 'rxjs/operators/zip';

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
          return ErrorObservable.create(err);
        }

        return timer(delayCalculator(retry));
      }),
    ),
  );
};

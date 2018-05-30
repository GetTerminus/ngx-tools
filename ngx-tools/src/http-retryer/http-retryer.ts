import { HttpErrorResponse } from '@angular/common/http';

import { MonoTypeOperatorFunction, range, timer , throwError, Observable, Scheduler } from 'rxjs';
import { take, mergeMap, retryWhen, zip } from 'rxjs/operators';

import { exponentialBackoffDelayCalculator } from '../retry-with-backoff/delay-calculator';
import { coerceNumberProperty } from './number-property';
import { coerceDateProperty } from './date-property';
import { async } from 'rxjs/internal/scheduler/async';

export interface RetryWithBackoff {
  retries: number;
  delayCalculator: (attempt: number) => number;
  scheduler: Scheduler | any;
}

export function httpRetryer<T>({
  retries = 2,
  delayCalculator = exponentialBackoffDelayCalculator({}),
  scheduler = async,
}: Partial<RetryWithBackoff>): MonoTypeOperatorFunction<T> {
  return retryWhen((errors: Observable<HttpErrorResponse | Error>) =>
    errors.pipe(
      zip(range(1, retries + 1)),
      mergeMap(([err, retry]) => {
        if (retry > retries || !isConsideredError(err)) {
          return throwError(err);
        }

        let waitTime: number | Date = delayCalculator(retry);

        if (err.status === 429) {
          const headerWaitTime = extractRetryAfterTime(err);
          waitTime = headerWaitTime || waitTime;
        }

        return timer(waitTime, scheduler).pipe(
          take(1),
        );
      }),
    ),
  );
}

function extractRetryAfterTime(err: HttpErrorResponse): number | Date | null {
  const retryHeaderValue = err.headers.get('Retry-After');

  if (retryHeaderValue) {
    return coerceNumberProperty(retryHeaderValue, null) ||
      coerceDateProperty(retryHeaderValue, null);
  } else {
    return null;
  }
}

function isConsideredError(err: HttpErrorResponse | Error): err is HttpErrorResponse {
  if (err.hasOwnProperty('status') && err.hasOwnProperty('headers')) {
    const e = err as HttpErrorResponse;
    return e.status === 0 || e.status === 429 || (e.status >= 500 && e.status < 600);
  } else {
    return false;
  }

}

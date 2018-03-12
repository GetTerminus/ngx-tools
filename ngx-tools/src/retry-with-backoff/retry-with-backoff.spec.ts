import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

import { retryWithBackoff } from './retry-with-backoff';


describe(`retryWithBackoff`, () => {

  test(`should retry for x retries and then throw`, (done) => {
    const linearBackoff = (attempt: number) => 1;
    const error = new Error('bar');
    const seenValues: {[idx: number]: number} = {}

    of(1, 2, 3).pipe(
      tap((v) => {
        if (!seenValues[v]) {
          seenValues[v] = 0;
        }

        seenValues[v]++;
      }),
      map((v) => {
        if (v === 2) {
          throw error;
        } else {
          return v;
        }
      }),
      retryWithBackoff({retries: 2, delayCalculator: linearBackoff}),
    ).subscribe(() => {}, (err: any) => {
      expect(err).toEqual(error);
      expect(seenValues).toEqual({
        1: 2,
        2: 2,
      });
      done()
    });
  });

});

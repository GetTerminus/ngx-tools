import { cold } from 'jasmine-marbles';

import { regenerateOnRetry } from './regenerate-on-retry';
import { retryWhen, take } from 'rxjs/operators';
import { throwError } from 'rxjs';

describe(`Regenerate on retry`, () => {
  it(`should call the function once per retry`, () => {
    const err = new Error('foo');
    let calls = 0;

    const stream = regenerateOnRetry(() => {
      calls += 1;
      return throwError(err);
    }).pipe(
      retryWhen((errs) =>  errs.pipe(take(1))),
    );

    (expect(stream) as any).toBeObservable(cold('|'));
    expect(calls).toEqual(2);
  });
});

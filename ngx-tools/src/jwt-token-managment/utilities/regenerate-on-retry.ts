import {
  Observable,
  of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';


export function regenerateOnRetry<T>(obs: (() => Observable<T>)): Observable<T> {
  // NOTE: TSLint is reporting an incorrect deprecation. Remove once https://github.com/palantir/tslint/issues/4522 lands
  // tslint:disable-next-line deprecation
  return of(true).pipe(
    switchMap(() => obs()),
  );
}


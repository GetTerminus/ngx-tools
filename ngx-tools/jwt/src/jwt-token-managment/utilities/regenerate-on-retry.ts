import {
  Observable,
  of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';


export function regenerateOnRetry<T>(obs: (() => Observable<T>)): Observable<T> {
  return of(true).pipe(
    switchMap(() => obs()),
  );
}


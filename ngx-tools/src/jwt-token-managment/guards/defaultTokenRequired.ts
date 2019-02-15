import { Injectable } from '@angular/core';
import { CanActivate, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter, map, withLatestFrom } from 'rxjs/operators';
import { getDefaultToken, getJwtTokenRoot } from '../selectors';
import { FailedToActivateRoute } from '../actions';

@Injectable()
export class DefaultTokenRequired implements CanActivate {
  currentLoadState = this.store.pipe(
    select(getJwtTokenRoot()),
    map((s) => (s && s.jwtTokens.initialTokenStatus) || 'uninitialized'),
  );

  currentToken: Observable<string> = this.store.pipe(
    select(getDefaultToken()),
    map((s) => s || ''),
  );

  constructor(
    public store: Store<any>,
  ) {}

  canActivate(): Observable<boolean> {
    return this.currentLoadState.pipe(
      filter((s) => s !== 'uninitialized'),
      withLatestFrom(this.currentToken),
      map(([_, token ]) => token.length > 0),
      tap((result) => {
        if (!result) {
          this.store.dispatch(new FailedToActivateRoute());
        }
      }),
    );

  }

}

import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, Scheduler, merge, timer } from 'rxjs';
import { mergeMap, map, take, filter, withLatestFrom, flatMap, delay } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';

import { getTokens } from './selectors';
import * as JwtTokenProviderActions from './actions';
import { jwtDecode } from '../jwt-decode/index';

export interface Claims { exp: number; }

export interface MinimalClaimMap {
  [id: string]: Claims;
}

export const SCHEDULER = new InjectionToken<Scheduler>('scheduler');
export const SECONDS_BEFORE_EXPIRATION_TO_NOTIFY = new InjectionToken<number>('wait time');

const DEFAULT_SECONDS_BEFORE_EXPIRATION_TO_NOTIFY = 5 * 60;

type PartialClaimTuple = [
  JwtTokenProviderActions.StoreToken<MinimalClaimMap>,
  Partial<Claims>
];

type FullClaimsTuple = [
  JwtTokenProviderActions.StoreToken<MinimalClaimMap>,
  Claims
];


@Injectable()
export class JwtTokenProviderEffects {

  @Effect()
  initializationCleanup$ = this.actions$
    .pipe(
      delay(100, this.scheduler || async),
      withLatestFrom(
        this.store.select(getTokens<MinimalClaimMap>()),
      ),
      map(([_, tokens]) => tokens),
      take(1),
      flatMap((tokens) => {
        const actions: JwtTokenProviderActions.StoreToken<MinimalClaimMap>[] = [];

        for (const tokenName in tokens) {
          if (tokens.hasOwnProperty(tokenName)) {
            const token = tokens[tokenName];
            if (token) {
              actions.push(
                new JwtTokenProviderActions.StoreToken({tokenName, token}),
              );
            }
          }
        }
        return actions;
      }),
    )
  ;

  @Effect()
  allTokensExpired$ = this.actions$
    .ofType<never>(JwtTokenProviderActions.ActionTypes.TokenExpired)
    .pipe(
      delay(10, this.scheduler || async),
      withLatestFrom(
        this.store.select(getTokens<MinimalClaimMap>()),
      ),
      map(([_, tokens]) => tokens),
      filter((tokens) => Object.keys(tokens).length === 0),
      map((tokens) => new JwtTokenProviderActions.AllTokensExpired()),
    )
  ;

  @Effect()
  notifyOfTokenExpiration$ = this.actions$
    .ofType<JwtTokenProviderActions.StoreToken<MinimalClaimMap>>(JwtTokenProviderActions.ActionTypes.StoreToken)
    .pipe(
      map((action: JwtTokenProviderActions.StoreToken<MinimalClaimMap>): PartialClaimTuple => {
        return [action, jwtDecode<Partial<Claims>>(action.token)];
      }),
      filter((a: PartialClaimTuple): a is FullClaimsTuple => a[1].exp !== undefined),
      mergeMap(([action, claims]) => {
        const currentEpoch = Math.ceil((new Date()).getTime() / 1000);

        if (claims.exp > currentEpoch) {
          const expiresIn = claims.exp - currentEpoch;
          const expirationBuffer = this.timeToWaitBeforeExpiration || DEFAULT_SECONDS_BEFORE_EXPIRATION_TO_NOTIFY;
          let expirationNearIn = 0;

          if (expiresIn < expirationBuffer) {
            expirationNearIn = 1;
          } else {
            expirationNearIn = expiresIn - expirationBuffer;
          }

          return merge(
            this.buildDelayedExpirationObservable(expirationNearIn * 1000, action, false),
            this.buildDelayedExpirationObservable(expiresIn * 1000, action, true),
          );
        } else {
          return of(new JwtTokenProviderActions.TokenExpired<MinimalClaimMap>({
            tokenName: action.tokenName,
            token: action.token,
          }));
        }
      }),
    )
  ;


  /*
   * This next function is being excluded from coverage due the complexities of
   * testing the `delay` function. In order to test as much as possible, each
   * peice has been separated into smaller testable functions.
   */
  buildDelayedExpirationObservable(
    emitTime: number | Date,
    action: JwtTokenProviderActions.StoreToken<MinimalClaimMap>,
    expired: boolean,
  ) {
    const outputActionArgs = {
      tokenName: action.tokenName,
      token: action.token,
    };

    return timer(emitTime, this.scheduler || async).pipe(
      take(1),
      map(() => expired ?
        new JwtTokenProviderActions.TokenExpired<MinimalClaimMap>(outputActionArgs) :
        new JwtTokenProviderActions.TokenNearingExpiration<MinimalClaimMap>(outputActionArgs),
      ),
    );
  }

  /* istanbul ignore next */
  constructor(
    private actions$: Actions,
    private store: Store<any>,

    @Optional()
    @Inject(SCHEDULER)
    private scheduler: Scheduler,

    @Optional()
    @Inject(SECONDS_BEFORE_EXPIRATION_TO_NOTIFY)
    private timeToWaitBeforeExpiration: number,
  ) {}
}


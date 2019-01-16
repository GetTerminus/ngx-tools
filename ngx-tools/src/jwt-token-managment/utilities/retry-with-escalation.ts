import {
  Inject,
  Injectable,
  InjectionToken,
  Optional,
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  merge,
  Observable,
  Scheduler,
  throwError,
  timer,
} from 'rxjs';
import {
  delay,
  filter,
  mergeMap,
  retryWhen,
  switchMap,
  take,
} from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { async } from 'rxjs/internal/scheduler/async';

import { ClaimMap } from '../claim-map';
import * as JwtActions from '../actions';


export const SCHEDULER = new InjectionToken<Scheduler>('scheduler');
export const ESCALATION_WAIT_TIME = new InjectionToken<number>('wait time');

const DEFAULT_ESCALATION_WAIT_TIME = 30000;

@Injectable()
export class RetryWithEscalation<CM = ClaimMap> {

  public retryWithEscalation(tokenName: Extract<keyof CM, string>) {
    return (source: Observable<any>) => {
      return source.pipe(
        retryWhen((errors: Observable<HttpErrorResponse | Error>) => {
          let tries = 0;
          return errors.pipe(
            mergeMap((err) => {
              if (
                tries > 0 ||
                err instanceof Error ||
                err.status !== 403
              ) {
                return throwError(err);
              }

              tries += 1;

              this.store.dispatch(new JwtActions.EscalateToken<CM>(tokenName));


              return merge(
                this.waitForResult(tokenName),
                this.expirationTimer(),
              ).pipe(
                take(1),
                delay(10, this.scheduler || async),
              );
            }),
          );
        }),
      );
    };
  }

  private waitForResult(tokenName: Extract<keyof CM, string>) {
    return this.actions$
      .pipe(
        ofType<JwtActions.EscalationFailed<CM> | JwtActions.EscalationSuccess<CM>>(
          JwtActions.ActionTypes.EscalationFailed,
          JwtActions.ActionTypes.EscalationSuccess,
        ),
        filter((a) => a.tokenName === tokenName),
        switchMap((escResult) => {
          if (escResult.type === JwtActions.ActionTypes.EscalationSuccess) {
            return 'complete';
          } else {
            return this.failureError();
          }
        }),
      )
    ;
  }

  private expirationTimer() {
    return timer(
      this.waitTime  || DEFAULT_ESCALATION_WAIT_TIME,
      this.scheduler || async,
    ).pipe(switchMap(() => this.failureError()));
  }

  private failureError() {
    return throwError(new Error('Failed to escalate token'));
  }

  constructor(
    private actions$: Actions,
    public store: Store<any>,

    @Optional()
    @Inject(SCHEDULER)
    private scheduler: Scheduler,

    @Optional()
    @Inject(ESCALATION_WAIT_TIME)
    private waitTime: number,

  ) {}

}

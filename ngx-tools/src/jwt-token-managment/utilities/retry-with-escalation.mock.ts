import {
  Injectable,
  InjectionToken,
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Observable,
  throwError,
  Scheduler,
} from 'rxjs';

import {
  mergeMap,
  retryWhen,
} from 'rxjs/operators';

import { ClaimMap } from '../claim-map';
import { RetryWithEscalation } from './retry-with-escalation';

export const SCHEDULER = new InjectionToken<Scheduler>('scheduler');
export const ESCALATION_WAIT_TIME = new InjectionToken<number>('wait time');


@Injectable()
export class RetryWithEscalationMock<CM = ClaimMap> extends RetryWithEscalation implements RetryWithEscalation {

  public tokenEscalationsRequested: string[] = [];
  public escalationSuccessful = true;

  static forTestBed() {
    return {
      provide: RetryWithEscalation,
      useFactory: retryWithEscalationFactory,
    };
  }

  public retryWithEscalation(tokenName: keyof CM) {
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

              this.tokenEscalationsRequested.push(tokenName);

              if (this.escalationSuccessful) {
                return 'complete';
              } else {
                return throwError(new Error('Failed to escalate token'));
              }
            }),
          );
        }),
      );
    };
  }
}

export function retryWithEscalationFactory() {
  return new RetryWithEscalationMock(undefined as any, undefined as any, undefined as any, undefined as any);
}

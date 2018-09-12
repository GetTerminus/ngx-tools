import {
  Injectable,
  InjectionToken,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Observer,
  of,
  Scheduler,
  timer,
} from 'rxjs';
import {
  switchMap,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import {
  ClaimMap,
  StoreTokenConstructor,
  TokenExtractor,
  TokenEscalator,
} from '@terminus/ngx-tools';


export const SCHEDULER = new InjectionToken<Scheduler>('scheduler');
export const ESCALATION_WAIT_TIME = new InjectionToken<number>('wait time');

export interface EscalateToken<CM = ClaimMap> extends Partial<StoreTokenConstructor<CM>> {
  authorizeUrl: Observable<string>;
  tokenName: Extract<keyof CM, string>;
}


@Injectable()
export class TokenEscalatorMock<CM = ClaimMap> implements TokenEscalator<CM> {
  escalators: { [idx: string]: Observer<any> } = {};

  requestsForToken: { [idx: string]: string[] } = {};

  static forTestBed() {
    return {
      provide: TokenEscalator,
      useFactory: tokenEscalatorFactory,
    };
  }

  public simulateEsclationRequest(tokenName: Extract<keyof CM, string>) {
    if (this.escalators[tokenName]) {
      this.escalators[tokenName].next({});
    } else {
      throw new Error(`No escalator for ${tokenName} setup`);
    }
  }

  public escalateToken({tokenName, authorizeUrl, isDefaultToken}: EscalateToken<CM>): Observable<any> {
    const observ = Observable.create((observer: Observer<any>) => {
      this.escalators[tokenName] = observer;
    }).pipe(
        takeUntil(timer(10000)),
        withLatestFrom(
          authorizeUrl,
        ),
        switchMap(([action, url]) => {
          if (!this.requestsForToken[tokenName]) {
            this.requestsForToken[tokenName] = [];
          }

          this.requestsForToken[tokenName].push(url);

          return of({ type: 'null op' });
        }),
      )
    ;
    observ.subscribe(() => {});
    return observ;
  }

  constructor(
    public actions$: Actions,
    public store: Store<any>,
    public http: HttpClient,
    public tokenExtractor: TokenExtractor<CM>,
  ) {}
}

export function tokenEscalatorFactory() {
  return new TokenEscalatorMock(undefined as any, undefined as any, undefined as any, undefined as any);
}

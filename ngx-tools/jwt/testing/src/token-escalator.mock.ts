// tslint:disable: no-any
import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  InjectionToken,
} from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  ClaimMap,
  StoreTokenConstructor,
  TokenEscalator,
  TokenExtractor,
} from '@terminus/ngx-tools/jwt';
import {
  Observable,
  Observer,
  of,
  timer,
} from 'rxjs';
import {
  switchMap,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';

import { ESCALATION_WAIT_TIME } from './escalation-wait-time';
import { SCHEDULER } from './scheduler';


export interface EscalateToken<CM = ClaimMap> extends Partial<StoreTokenConstructor<CM>> {
  authorizeUrl: Observable<string>;
  tokenName: Extract<keyof CM, string>;
}


@Injectable()
export class TokenEscalatorMock<CM = ClaimMap> implements TokenEscalator<CM> {
  public escalators: { [idx: string]: Observer<any> } = {};

  public requestsForToken: { [idx: string]: string[] } = {};

  public static forTestBed() {
    return {
      provide: TokenEscalator,
      useFactory: tokenEscalatorFactory,
    };
  }

  /**
   * deprecated Please use the correctly spelled function `simulateEscalationRequest`
   */
  public simulateEsclationRequest(tokenName: Extract<keyof CM, string>) {
    if (this.escalators[tokenName]) {
      this.escalators[tokenName].next({});
    } else {
      throw new Error(`No escalator for ${tokenName} setup`);
    }
  }

  public simulateEscalationRequest(tokenName: Extract<keyof CM, string>) {
    if (this.escalators[tokenName]) {
      this.escalators[tokenName].next({});
    } else {
      throw new Error(`No escalator for ${tokenName} setup`);
    }
  }

  public escalateToken({tokenName, authorizeUrl, isDefaultToken}: EscalateToken<CM>): Observable<any> {
    const observ = new Observable((observer: Observer<any>) => {
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

        return of({type: 'null op'});
      }),
    );
    observ.subscribe(() => {});
    return observ;
  }

  public constructor(
    public actions$: Actions,
    public store: Store<any>,
    public http: HttpClient,
    public tokenExtractor: TokenExtractor<CM>,
  ) {}
}

export function tokenEscalatorFactory() {
  return new TokenEscalatorMock(undefined as any, undefined as any, undefined as any, undefined as any);
}

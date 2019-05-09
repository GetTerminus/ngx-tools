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
} from '@terminus/ngx-tools';
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


// TODO: Scheduler is marked as deprecated to stop others from using although it is not technically deprecated from what I can tell. The
// 'correct' path would be to create our own class extending `SchedulerLike`. https://github.com/GetTerminus/ngx-tools/issues/287
// tslint:disable-next-line deprecation
export const SCHEDULER = new InjectionToken<Scheduler>('scheduler');
export const ESCALATION_WAIT_TIME = new InjectionToken<number>('wait time');

export interface EscalateToken<CM = ClaimMap> extends Partial<StoreTokenConstructor<CM>> {
  authorizeUrl: Observable<string>;
  tokenName: Extract<keyof CM, string>;
}


// tslint:disable no-any
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

  public simulateEsclationRequest(tokenName: Extract<keyof CM, string>) {
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

        // NOTE: TSLint is reporting an incorrect deprecation. Remove once https://github.com/palantir/tslint/issues/4522 lands
        // tslint:disable-next-line deprecation
        return of({
          type: 'null op',
        });
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

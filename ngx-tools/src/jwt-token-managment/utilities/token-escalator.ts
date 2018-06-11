import {
  Injectable,
  InjectionToken,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Observable,
  Scheduler,
  of,
} from 'rxjs';

import {
  filter,
  switchMap,
  withLatestFrom,
  catchError,
  map,
} from 'rxjs/operators';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ClaimMap } from '../claim-map';
import { tokenFor } from '../selectors';
import * as JwtActions from '../actions';
import { TokenExtractor } from './token-extractor';

export const SCHEDULER = new InjectionToken<Scheduler>('scheduler');
export const ESCALATION_WAIT_TIME = new InjectionToken<number>('wait time');

export interface EscalateToken<CM = ClaimMap> extends Partial<JwtActions.StoreTokenConstructor<CM>> {
  authorizeUrl: Observable<string>;
  tokenName: keyof CM;
}

@Injectable()
export class TokenEscalator<CM = ClaimMap> {

  public escalateToken({tokenName, authorizeUrl, isDefaultToken}: EscalateToken<CM>): Observable<any> {
    return this.actions$.ofType<
        JwtActions.EscalateToken<CM>
      >(JwtActions.ActionTypes.EscalateToken)
      .pipe(
        filter((a) => a.tokenName === tokenName),
        withLatestFrom(
          authorizeUrl,
          this.store.select(tokenFor<CM, typeof tokenName>(tokenName)),
        ),
        switchMap(([action, url, currentToken]) => {
          const headers = new HttpHeaders({
            Authorization: `Bearer ${currentToken}`,
          });

          return this.http.get<{token: string}>(
            url,
            {headers},
          ).pipe(
            this.tokenExtractor.extractJwtToken({
              tokenName,
              isDefaultToken,
            }),
            map(() => new JwtActions.EscalationSuccess(tokenName)),
            catchError(() => of(
              new JwtActions.EscalationFailed<CM>(tokenName),
            )),
          );
        }),
      )
    ;
  }

  constructor(
    private actions$: Actions,
    public store: Store<any>,
    public http: HttpClient,
    public tokenExtractor: TokenExtractor<CM>,
  ) {}

}

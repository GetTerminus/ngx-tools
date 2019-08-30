import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  Injectable,
  InjectionToken,
} from '@angular/core';
import {
  Actions,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

import * as JwtActions from './../actions';
import { ClaimMap } from './../claim-map';
import { tokenFor } from './../selectors';
import { ESCALATION_WAIT_TIME } from './retry-with-escalation';
import { TokenExtractor } from './token-extractor';


export interface EscalateToken<CM = ClaimMap> extends Partial<JwtActions.StoreTokenConstructor<CM>> {
  authorizeUrl: Observable<string>;
  tokenName: Extract<keyof CM, string>;
}


@Injectable()
export class TokenEscalator<CM = ClaimMap> {

  // tslint:disable-next-line no-any
  public escalateToken({ tokenName, authorizeUrl, isDefaultToken }: EscalateToken<CM>): Observable<any> {
    return this.actions$
      .pipe(
        ofType<JwtActions.EscalateToken<CM>>(JwtActions.ActionTypes.EscalateToken),
        filter(a => a.tokenName === tokenName),
        withLatestFrom(
          authorizeUrl,
          this.store.select(tokenFor<CM, typeof tokenName>(tokenName)),
        ),
        switchMap(([action, url, currentToken]) => {
          const headers = new HttpHeaders({ Authorization: `Bearer ${currentToken}` });

          return this.http.get<{token: string}>(
            url,
            { headers },
          ).pipe(
            this.tokenExtractor.extractJwtToken({
              tokenName,
              isDefaultToken,
            }),
            map(() => new JwtActions.EscalationSuccess(tokenName)),
            // NOTE: TSLint is reporting an incorrect deprecation. Remove once https://github.com/palantir/tslint/issues/4522 lands
            // tslint:disable-next-line deprecation
            catchError(() => of(
              new JwtActions.EscalationFailed<CM>(tokenName),
            )),
          );
        }),
      )
    ;
  }

  public constructor(
    public actions$: Actions,
    // tslint:disable-next-line no-any
    public store: Store<any>,
    public http: HttpClient,
    public tokenExtractor: TokenExtractor<CM>,
  ) {}

}

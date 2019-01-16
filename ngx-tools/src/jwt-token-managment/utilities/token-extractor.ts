import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ClaimMap } from '../claim-map';
import { StoreTokenConstructor, StoreToken } from '../actions';


export interface ExtractTokenParams<C = ClaimMap> extends Partial<StoreTokenConstructor<C>> {
  tokenName: Extract<keyof C, string>;
}

interface TokenResponse {
  token: string;
}

function isTokenResponse<T>(x: Object | TokenResponse | HttpResponse<T>): x is TokenResponse {
  return x.hasOwnProperty('token');
}

function isHttpResponse<T>(x: Object | TokenResponse | HttpResponse<T>): x is HttpResponse<T> {
  return x.hasOwnProperty('headers');
}

export const TOKEN_NOT_FOUND = new Error('Token Not found in response');


@Injectable()
export class TokenExtractor<CM = ClaimMap> {

  public extractJwtToken<T extends Object | HttpResponse<any>>({tokenName, resetAllOtherTokens, isDefaultToken}: ExtractTokenParams<CM>) {
    return (source: Observable<T>) => {
      return source.pipe(
        tap((request) => {
          const token = this.extractTokenFromResponse(request);

          if (token !== '') {
            this.store.dispatch(new StoreToken<CM>({
              tokenName,
              token,
              resetAllOtherTokens,
              isDefaultToken,
            }));
          } else {
            throw TOKEN_NOT_FOUND;
          }
        }),
      );
    };
  }

  public extractTokenFromResponse<T extends Object | HttpResponse<any>>(input: T): string {
    let token = '';

    if (isTokenResponse(input)) {
      token = input.token;
    } else if (isHttpResponse(input)) {
      const authHeader = input.headers.get('Authorization');

      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substr(7);
      }
    }

    return token;
  }

  constructor(
    public store: Store<any>,
  ) {}

}

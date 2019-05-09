import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  StoreToken,
  StoreTokenConstructor,
} from './../actions';
import { ClaimMap } from './../claim-map';


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

export const TOKEN_NOT_FOUND_ERROR = new Error('Token Not found in response');


@Injectable()
export class TokenExtractor<CM = ClaimMap> {
  // tslint:disable-next-line no-any
  public extractJwtToken<T extends Object | HttpResponse<any>>({tokenName, isDefaultToken}: ExtractTokenParams<CM>) {
    return (source: Observable<T>) => source.pipe(
      tap(request => {
        const token = this.extractTokenFromResponse(request);

        if (token === '') {
          throw TOKEN_NOT_FOUND_ERROR;
        } else {
          this.store.dispatch(new StoreToken<CM>({
            tokenName,
            token,
            isDefaultToken,
          }));
        }
      }),
    );
  }

  // tslint:disable-next-line no-any
  public extractTokenFromResponse<T extends Object | HttpResponse<any>>(input: T): string {
    let token = '';

    if (isTokenResponse(input)) {
      token = input.token;
    } else if (isHttpResponse(input)) {
      const authHeader = input.headers.get('Authorization');
      const tokenStartsAtChar = 7;

      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substr(tokenStartsAtChar);
      }
    }

    return token;
  }

  public constructor(
    // tslint:disable-next-line no-any
    public store: Store<any>,
  ) {}

}

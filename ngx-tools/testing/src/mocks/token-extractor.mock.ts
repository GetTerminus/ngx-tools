import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  ClaimMap,
  StoreTokenConstructor,
  TokenExtractor,
} from '@terminus/ngx-tools';


export interface ExtractTokenParams<C = ClaimMap> extends Partial<StoreTokenConstructor<C>> {
  tokenName: Extract<keyof C, string>;
}

export const TOKEN_NOT_FOUND = new Error('Token Not found in response');


@Injectable()
export class TokenExtractorMock<CM = ClaimMap> extends TokenExtractor {
  public extractedTokens: string[] = [];

  static forTestBed() {
    return {
      provide: TokenExtractor,
      useFactory: tokenExtractorMockFactory ,
    };
  }


  public extractJwtToken<T extends Object | HttpResponse<any>>({tokenName, isDefaultToken}: ExtractTokenParams<CM>) {
    return (source: Observable<T>) => {
      return source.pipe(
        tap((request) => {
          const token = this.extractTokenFromResponse(request);

          if (token !== '') {
            this.extractedTokens.push(token);
          } else {
            throw TOKEN_NOT_FOUND;
          }
        }),
      );
    };
  }
}


export function tokenExtractorMockFactory() {
  return new TokenExtractorMock(undefined as any);
}

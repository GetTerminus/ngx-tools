// tslint:disable: no-any
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ClaimMap,
  StoreTokenConstructor,
  TokenExtractor,
} from '@terminus/ngx-tools/jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export interface ExtractTokenParams<C = ClaimMap> extends Partial<StoreTokenConstructor<C>> {
  tokenName: Extract<keyof C, string>;
}

export const TOKEN_NOT_FOUND = new Error('Token Not found in response');


/**
 * @deprecated Please import from `@terminus/ngx-tools/jwt/testing`
 */
@Injectable()
export class TokenExtractorMock<CM = ClaimMap> extends TokenExtractor {
  public extractedTokens: string[] = [];

  public static forTestBed() {
    return {
      provide: TokenExtractor,
      useFactory: tokenExtractorMockFactory,
    };
  }


  // tslint:disable-next-line no-any
  public extractJwtToken<T extends Object | HttpResponse<any>>({tokenName, isDefaultToken}: ExtractTokenParams<CM>) {
    return (source: Observable<T>) => source.pipe(
      tap(request => {
        const token = this.extractTokenFromResponse(request);

        if (token === '') {
          throw TOKEN_NOT_FOUND;
        } else {
          this.extractedTokens.push(token);
        }
      }),
    );
  }
}


export function tokenExtractorMockFactory() {
  // tslint:disable-next-line no-any deprecation
  return new TokenExtractorMock(undefined as any);
}

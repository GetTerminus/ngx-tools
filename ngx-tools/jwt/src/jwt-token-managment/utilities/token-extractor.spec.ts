import {
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import * as JwtActions from './../actions';
import { MinimalClaimMap } from './../effects';
import {
  TOKEN_NOT_FOUND_ERROR,
  TokenExtractor,
} from './token-extractor';

interface MockClaimMap {
  foo: {bar: number};
}

describe(`TokenExtractor`, function() {
  let mockStore: {dispatch: jest.MockInstance<any, any>};
  let extractor: TokenExtractor<MockClaimMap>;

  beforeEach(() => {
    mockStore = { dispatch: jest.fn() };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenExtractor,
        {
          provide: Store,
          useValue: mockStore,
        },
      ],
    });

    extractor = TestBed.inject<TokenExtractor>(TokenExtractor);
  });

  test(`should dispatch a store token action when the header is found`, () => {
    const headers = new HttpHeaders({ Authorization: 'Bearer asdfkjlslfd' });
    const httpResponse = new HttpResponse({ headers });

    const stream = cold('a', { a: httpResponse }).pipe(
      extractor.extractJwtToken({ tokenName: 'foo' }),
    );

    (expect(stream) as any).toBeObservable(cold('a', { a: httpResponse }));

    expect(mockStore.dispatch.mock.calls[0][0]).toEqual(
      new JwtActions.StoreToken<MinimalClaimMap>({
        tokenName: 'foo',
        token: 'asdfkjlslfd',
      }),
    );
  });

  test(`should throw an error if no token is found`, () => {
    const headers = new HttpHeaders({});
    const httpResponse = new HttpResponse({ headers });

    const stream = cold('a', { a: httpResponse }).pipe(
      extractor.extractJwtToken({ tokenName: 'foo' }),
    );

    (expect(stream) as any).toBeObservable(cold('#', {}, TOKEN_NOT_FOUND_ERROR));
  });

  test(`should throw an error if the header is funky`, () => {
    const headers = new HttpHeaders({ Authorization: 'dude' });

    const httpResponse = new HttpResponse({ headers });

    const stream = cold('a', { a: httpResponse }).pipe(
      extractor.extractJwtToken({ tokenName: 'foo' }),
    );

    (expect(stream) as any).toBeObservable(cold('#', {}, TOKEN_NOT_FOUND_ERROR));
  });

  test(`should dispatch a store token action when present in the body`, () => {
    const responseBody = { token: 'asdfkjlslfd' };

    const stream = cold('a', { a: responseBody }).pipe(
      extractor.extractJwtToken({
        tokenName: 'foo',
        isDefaultToken: true,
      }),
    );

    (expect(stream) as any).toBeObservable(cold('a', { a: responseBody }));

    expect(mockStore.dispatch.mock.calls[0][0]).toEqual(
      new JwtActions.StoreToken<MinimalClaimMap>({
        tokenName: 'foo',
        token: 'asdfkjlslfd',
        isDefaultToken: true,
      }),
    );
  });
});

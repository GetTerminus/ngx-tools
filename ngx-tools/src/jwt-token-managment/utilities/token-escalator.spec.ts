import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { of, Observable } from 'rxjs';

import * as JwtActions from '../actions';
import { TokenEscalator } from './token-escalator';
import { TokenExtractor } from './token-extractor';
import { ClaimMap } from './../claim-map';

interface MockClaimMap {
  foo: {bar: number};
}


describe(`TokenEscalator`, () => {
  let mockStore: {select: jest.MockInstance<any>; dispatch: jest.MockInstance<any>};
  let mockHttp: {get: jest.MockInstance<any>};
  let escalator: TokenEscalator<MockClaimMap>;
  let actions: Observable<any>;
  const tokenName = 'foo';
  const authorizeUrl = of('/foobar');

  beforeEach(() => {
    mockHttp = {get: jest.fn() };
    mockStore = {
      select: jest.fn(),
      dispatch: jest.fn(),
    };
    TestBed.configureTestingModule({
      providers: [
        TokenEscalator,
        TokenExtractor,
        provideMockActions(() => actions),
        {
          provide: Store,
          useValue: mockStore,
        },
        {
          provide: HttpClient,
          useValue: mockHttp,
        },
      ],
    });

    escalator = TestBed.get(TokenEscalator);
  });


  test(`should dispatch success on a successful response`, () => {
    actions = cold('a', {a: new JwtActions.EscalateToken<ClaimMap>(tokenName)});
    const responseBody = {token: 'asdfkjlslfd'};
    mockHttp.get.mockReturnValue(of(responseBody));
    mockStore.select.mockReturnValue(of('currentToken'));

    (
      expect(
        escalator.escalateToken({tokenName, authorizeUrl, isDefaultToken: true}),
      ) as any
    ).toBeObservable(cold('a', {
      a: new JwtActions.EscalationSuccess<ClaimMap>(tokenName),
    }));
  });


  test(`should dispatch failed if the token fails to extract`, () => {
    actions = cold('a', {a: new JwtActions.EscalateToken<ClaimMap>(tokenName)});
    const responseBody = {};
    mockHttp.get.mockReturnValue(of(responseBody));
    mockStore.select.mockReturnValue(of('currentToken'));

    (
      expect(
        escalator.escalateToken({tokenName, authorizeUrl, isDefaultToken: true}),
      ) as any
    ).toBeObservable(cold('a', {
      a: new JwtActions.EscalationFailed<ClaimMap>(tokenName),
    }));
  });

});

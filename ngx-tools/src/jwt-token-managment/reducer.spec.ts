import { jwtTokenProviderReducer, initialState } from './reducer';
import * as jwtActions from './actions';
import { Action } from '@ngrx/store';

interface MockClaimMap {
  foo: { bar?: string };
  bar: { baz?: number };
}

describe('jwtTokenProviderReducer', () => {
  describe('toke expiration', () => {
    it('clears the default token', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {defaultToken: 'abcd', tokens: {}},
          new jwtActions.TokenExpired<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
          }),
        ),
      ).toEqual({
        tokens: {},
      });
    });


    it('clears sub tokens', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {tokens: { bar: '123', foo: 'abcd' }},
          new jwtActions.TokenExpired<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
          }),
        ),
      ).toEqual({
        tokens: { bar: '123' },
      });
    });
  });

  describe('a storing a token', () => {
    it('stores a new token', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {tokens: {}},
          new jwtActions.StoreToken<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
          }),
        ),
      ).toEqual({
        tokens: {foo: 'abcd'},
      });
    });

    it('resets all existing tokens', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {defaultToken: 'foo', tokens: { foo: 'foo' }},
          new jwtActions.StoreToken<MockClaimMap>({
            tokenName: 'bar',
            resetAllOtherTokens: true,
            token: 'abcd',
          }),
        ),
      ).toEqual({
        tokens: {bar: 'abcd'},
      });
    });

    it('stores a new token as a default it set', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {tokens: {}},
          new jwtActions.StoreToken<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
            isDefaultToken: true,
          }),
        ),
      ).toEqual({
        defaultToken: 'abcd',
        tokens: {foo: 'abcd'},
      });
    });

    it('updates an existing token', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {tokens: {foo: 'foobar'}},
          new jwtActions.StoreToken<MockClaimMap>({tokenName: 'foo', token: 'abcd'}),
        ),
      ).toEqual({
        tokens: {foo: 'abcd'},
      });
    });
  });

  describe('a non recognized action', () => {
    class UnknownAction implements Action {
      type: 'foobar' = 'foobar';
      constructor() {}
    }
    const action = new UnknownAction();

    it('returns the initial state', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(undefined, action as any),
      ).toEqual(initialState);
    });

    it('returns the current state', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>({tokens: {foo: 'sadf'}}, action as any),
      ).toEqual({tokens: {foo: 'sadf'}});
    });
  });
});


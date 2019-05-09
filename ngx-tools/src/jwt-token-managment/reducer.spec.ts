import { Action } from '@ngrx/store';
import {
  initialState,
  jwtTokenProviderReducer,
} from './reducer';
import * as jwtActions from './actions';

interface MockClaimMap {
  foo: { bar?: string };
  bar: { baz?: number };
}


describe('jwtTokenProviderReducer', function() {

  describe('token expiration', () => {

    test(`rejects the action if the state is already loaded`, () => {
      const startingState = {
        initialTokenStatus: 'loaded' as 'loaded',
        tokens: {
          foo: 'asdf',
        },
      };

      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          startingState,
          new jwtActions.InitialTokenExtracted('123123123123'),
        ),
      ).toEqual(startingState);
    });


    test(`rejects the action if the state is already empty`, () => {
      const startingState = {
        initialTokenStatus: 'empty' as 'empty',
        tokens: {
          foo: 'asdf',
        },
      };

      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          startingState,
          new jwtActions.InitialTokenExtracted('123123123123'),
        ),
      ).toEqual(startingState);
    });


    test(`changes the InitialTokenExtracted to empty of the cookie is empty`, () => {
      const startingState = {
        initialTokenStatus: 'uninitialized' as 'uninitialized',
        tokens: {},
      };

      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          startingState,
          new jwtActions.InitialTokenExtracted(''),
        ).initialTokenStatus,
      ).toEqual('empty');
    });


    test(`should store the initial token`, () => {
      const startingState = {
        initialTokenStatus: 'uninitialized' as 'uninitialized',
        tokens: {},
      };

      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          startingState,
          new jwtActions.InitialTokenExtracted('abcd'),
        ),
      ).toEqual({
        initialTokenStatus: 'loaded',
        defaultToken: 'abcd',
        tokens: {},
      });
    });

  });


  describe('token expiration', () => {

    test('clears the default token', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {
            initialTokenStatus: 'loaded',
            defaultToken: 'abcd',
            tokens: {},
          },
          new jwtActions.TokenExpired<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
          }),
        ),
      ).toEqual({
        initialTokenStatus: 'loaded',
        tokens: {},
      });
    });


    test('clears sub tokens', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {
            initialTokenStatus: 'loaded',
            tokens: {
              bar: '123',
              foo: 'abcd',
            },
          },
          new jwtActions.TokenExpired<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
          }),
        ),
      ).toEqual({
        initialTokenStatus: 'loaded',
        tokens: {
          bar: '123',
        },
      });
    });

  });


  describe('a storing a token', () => {

    test('stores a new token', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {
            initialTokenStatus: 'loaded',
            tokens: {},
          },
          new jwtActions.StoreToken<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
          }),
        ),
      ).toEqual({
        initialTokenStatus: 'loaded',
        tokens: {
          foo: 'abcd',
        },
      });
    });


    test('stores a new token as a default it set', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {
            initialTokenStatus: 'loaded',
            tokens: {
              dude: 'wassup',
            },
          },
          new jwtActions.StoreToken<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
            isDefaultToken: true,
          }),
        ),
      ).toEqual({
        initialTokenStatus: 'loaded',
        defaultToken: 'abcd',
        tokens: {
          foo: 'abcd',
        },
      });
    });


    test('updates an existing token', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(
          {
            initialTokenStatus: 'loaded',
            tokens: {
              foo: 'foobar',
            },
          },
          new jwtActions.StoreToken<MockClaimMap>({
            tokenName: 'foo',
            token: 'abcd',
          }),
        ),
      ).toEqual({
        initialTokenStatus: 'loaded',
        tokens: {
          foo: 'abcd',
        },
      });
    });

  });


  describe('a non recognized action', () => {
    class UnknownAction implements Action {
      type: 'foobar' = 'foobar';
      constructor() {}
    }
    const action = new UnknownAction();


    test('returns the initial state', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>(undefined, action as any),
      ).toEqual(initialState);
    });


    test('returns the current state', () => {
      expect(
        jwtTokenProviderReducer<MockClaimMap>({
          initialTokenStatus: 'loaded',
          tokens: {
            foo: 'sadf',
          },
        }, action as any),
      ).toEqual({
        initialTokenStatus: 'loaded',
        tokens: {
          foo: 'sadf',
        },
      });
    });

  });

});


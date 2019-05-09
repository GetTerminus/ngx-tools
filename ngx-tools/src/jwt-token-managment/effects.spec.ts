import {
  async,
  TestBed,
} from '@angular/core/testing';
import { ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import {
  cold,
  getTestScheduler,
  hot,
} from 'jasmine-marbles';
import {
  BehaviorSubject,
  of,
} from 'rxjs';

import { TsCookieService } from './../cookie-service/cookie.service';
import * as Actions from './actions';
import {
  JwtTokenProviderEffects,
  MinimalClaimMap,
  SCHEDULER,
  SECONDS_BEFORE_EXPIRATION_TO_NOTIFY,
} from './effects';
import { State } from './state';
import { INITIAL_TOKEN_NAME } from './tokens';


function createFakeJwt(
  payload: object,
  headers: object = {
    alg: 'HS256',
    typ: 'JWT',
  },
) {
  return [
    window.btoa(JSON.stringify(headers)),
    window.btoa(JSON.stringify(payload)),
    'fakeSignature',
  ].join('.');
}


describe(`JWT Token Effects`, function() {
  let actions: any;
  let effects: JwtTokenProviderEffects;
  let mockStore: {select: jest.MockInstance<any, any>};
  let selectOutput: BehaviorSubject<any>;
  let mockCookieService: {get: jest.MockInstance<any, any>};
  const currentEpoch = () => Math.ceil((new Date).getTime() / 1000);

  beforeEach(async(() => {
    selectOutput = new BehaviorSubject({});
    mockStore = {select: jest.fn()};
    mockStore.select.mockReturnValue(selectOutput);
    mockCookieService = {get: jest.fn()};

    TestBed.configureTestingModule({
      providers: [
        JwtTokenProviderEffects,
        provideMockActions(() => actions),
        {
          provide: INITIAL_TOKEN_NAME,
          useValue: 'initToken',
        },
        {
          provide: TsCookieService,
          useValue: mockCookieService,
        },
        {
          provide: SCHEDULER,
          useFactory: getTestScheduler,
        },
        {
          provide: SECONDS_BEFORE_EXPIRATION_TO_NOTIFY,
          useValue: 2,
        },
        {
          provide: Store,
          useValue: mockStore,
        },
      ],
    });

    effects = TestBed.get(JwtTokenProviderEffects);
  }));


  describe(`initialCookieLoader$`, () => {
    const blankState: State = {
      jwtTokens: {
        initialTokenStatus: 'uninitialized',
        tokens: {},
      },
    };

    test(`should provide a cookie and store cookie message if the cookie is set`, () => {
      const currentState = of<State>(blankState);
      mockCookieService.get.mockReturnValue('abcd');

      const expected = cold('(ab|)', {
        a: new Actions.InitialTokenExtracted('abcd'),
        b: new Actions.StoreToken({
          tokenName: 'initToken',
          token: 'abcd',
          isDefaultToken: true,
        }),
      });

      expect(
        effects.initialCookieLoader$({currentState}),
      ).toBeObservable(expected);
    });

    test(`should emit nothing if state is loaded`, () => {
      const currentState = of<State>({
        ...blankState,
        jwtTokens: {
          ...blankState.jwtTokens,
          initialTokenStatus: 'loaded',
        },
      });
      mockCookieService.get.mockReturnValue('abcd');

      const expected = cold('|');

      expect(
        effects.initialCookieLoader$({currentState}),
      ).toBeObservable(expected);
    });

    test(`should emit nothing if state is empty`, () => {
      const currentState = of<State>({
        ...blankState,
        jwtTokens: {
          ...blankState.jwtTokens,
          initialTokenStatus: 'empty',
        },
      });

      mockCookieService.get.mockReturnValue('abcd');

      const expected = cold('|');

      expect(
        effects.initialCookieLoader$({currentState}),
      ).toBeObservable(expected);
    });

    it(`it should only announce the initial if the cookie is empty`, () => {
      const currentState = of<State>(blankState);
      mockCookieService.get.mockReturnValue('');

      const expected = cold('(a|)', {a: new Actions.InitialTokenExtracted('')});

      expect(
        effects.initialCookieLoader$({currentState}),
      ).toBeObservable(expected);
    });
  });

  describe(`initializationCleanup$`, () => {

    test(`should dispatch a nothing if the exp is unset`, () => {
      actions = hot('a', {a: {type: ROOT_EFFECTS_INIT}});

      const expected = cold(`${'-'.repeat(10)  }(ab|)`, {
        a: new Actions.StoreToken<MinimalClaimMap>({
          tokenName: 'foo',
          token: 'abc',
        }),
        b: new Actions.StoreToken<MinimalClaimMap>({
          tokenName: 'bar',
          token: 'abc',
        }),
      });

      selectOutput.next({
        foo: 'abc',
        bar: 'abc',
      });

      (expect(
        effects.initializationCleanup$,
      ) as any).toBeObservable(expected);
    });


    test(`should dispatch only truthy values`, () => {
      actions = hot('a', {a: {type: ROOT_EFFECTS_INIT}});

      const expected = cold(`${'-'.repeat(10)  }(a|)`, {
        a: new Actions.StoreToken<MinimalClaimMap>({
          tokenName: 'foo',
          token: 'abc',
        }),
      });

      selectOutput.next({
        foo: 'abc',
        bar: null,
      });

      (expect(
        effects.initializationCleanup$,
      ) as any).toBeObservable(expected);
    });
  });


  describe(`allTokensExpired$`, () => {

    test(`should dispatch a message when the last token expires`, () => {
      actions = hot('a', {
        a: new Actions.TokenExpired<MinimalClaimMap>({
          tokenName: 'bar',
          token: 'foo',
        }),
      });

      const expected = cold('-a', {a: new Actions.AllTokensExpired()});

      selectOutput.next({ });

      (expect(
        effects.allTokensExpired$,
      ) as any).toBeObservable(expected);
    });


    test(`should not dispatch a message when a token remains`, () => {
      actions = hot('a', {
        a: new Actions.TokenExpired<MinimalClaimMap>({
          tokenName: 'bar',
          token: 'foo',
        }),
      });

      const expected = cold('--', { });

      selectOutput.next({foo: '123'});

      (expect(
        effects.allTokensExpired$,
      ) as any).toBeObservable(expected);
    });

  });


  describe('notifyOfTokenExpiration$', () => {

    test(`should dispatch a nothing if the exp is unset`, () => {
      actions = hot('a', {
        a: new Actions.StoreToken<{Foobr: string}>({
          tokenName: 'Foobr',
          token: createFakeJwt({foo: 'bar'}),
        }),
      });
      const expected = cold('-');

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });


    test(`should dispatch a token expired action if the exp is  in the past`, () => {
      const params = {
        tokenName: 'Foobar',
        token: createFakeJwt({
          foo: 'bar',
          exp: currentEpoch() - 1,
        }),
      };
      actions = hot('a', {a: new Actions.StoreToken<MinimalClaimMap>(params)});
      const expected = cold('b', {b: new Actions.TokenExpired<MinimalClaimMap>(params)});

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });


    test(`should dispatch expiration and nearing expiration actions`, () => {
      getTestScheduler().maxFrames = 3500;
      const params = {
        tokenName: 'Foobr',
        token: createFakeJwt({
          foo: 'bar',
          exp: currentEpoch() + 3,
        }),
      };

      const action = new Actions.StoreToken<MinimalClaimMap>(params);

      actions = hot('a', {a: action});

      const expected = cold(`-${'-'.repeat(99)}a${'-'.repeat(199)}b`, {
        a: new Actions.TokenNearingExpiration<MinimalClaimMap>(params),
        b: new Actions.TokenExpired<MinimalClaimMap>(params),
      });

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });


    test(`should dispatch nearing expiration right away if within the timeout`, () => {
      getTestScheduler().maxFrames = 2500;
      const params = {
        tokenName: 'Foobr',
        token: createFakeJwt({
          foo: 'bar',
          exp: currentEpoch() + 1,
        }),
      };

      const action = new Actions.StoreToken<MinimalClaimMap>(params);

      actions = hot('a', {a: action});

      const expected = cold(`${'-'.repeat(100)}(ab)`, {
        a: new Actions.TokenNearingExpiration<MinimalClaimMap>(params),
        b: new Actions.TokenExpired<MinimalClaimMap>(params),
      });

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });

  });

});

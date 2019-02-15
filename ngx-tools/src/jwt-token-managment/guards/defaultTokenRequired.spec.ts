import { TestBed, async } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  hot,
  cold,
  getTestScheduler,
} from 'jasmine-marbles';

import { DefaultTokenRequired } from './defaultTokenRequired';
import { FailedToActivateRoute } from '../actions';


describe(`JWT Token Effects`, () => {
  let guard: DefaultTokenRequired;
  let mockStore: {
    pipe: jest.MockInstance<any>;
    dispatch: jest.MockInstance<any>;
  };

  beforeEach(async(() => {
    mockStore = {pipe: jest.fn(), dispatch: jest.fn() };

    TestBed.configureTestingModule({
      providers: [
        DefaultTokenRequired,
        { provide: Store, useValue: mockStore },
      ],
    });

    guard = TestBed.get(DefaultTokenRequired);
  }));


  describe(`canActivate`, () => {
    test(`it waits for the type to change from uninitialized`, () => {
      const token = cold('a', {a: 'tokenA'});
      const states   =  hot('a-----b', {a: 'uninitialized', b: 'loaded'});
      const expected = cold('------b', {b: true});

      guard.currentLoadState = states;
      guard.currentToken     = token;

      expect(
        guard.canActivate(),
      ).toBeObservable(expected);
    });

    test(`it returns false if the token is empty`, () => {
      const token = cold('a', {a: ''});
      const states   =  hot('a-----b', {a: 'uninitialized', b: 'loaded'});
      const expected = cold('------b', {b: false});

      guard.currentLoadState = states;
      guard.currentToken     = token;

      expect(
        guard.canActivate(),
      ).toBeObservable(expected);

      expect(mockStore.dispatch)
        .toHaveBeenCalledWith(new FailedToActivateRoute());
    });
  });
});

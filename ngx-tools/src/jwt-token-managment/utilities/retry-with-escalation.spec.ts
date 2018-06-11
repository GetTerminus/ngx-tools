import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  hot,
  cold,
  getTestScheduler,
} from 'jasmine-marbles';
import { Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';


import * as JwtActions from '../actions';

import {
  RetryWithEscalation,
  SCHEDULER,
  ESCALATION_WAIT_TIME,
} from './retry-with-escalation';
import { tap } from 'rxjs/operators';

interface MockClaimMap {
  foo: {bar: number};
}

describe(`RetryWithEscalation`, () => {
  let mockStore: {dispatch: jest.MockInstance<any>};
  let actions: Observable<any>;
  let retryer: RetryWithEscalation;


  beforeEach(() => {
    mockStore = {dispatch: jest.fn() };

    TestBed.configureTestingModule({
      providers: [
        RetryWithEscalation,
        provideMockActions(() => actions),
        {
          provide: Store,
          useValue: mockStore,
        },
        { provide: SCHEDULER, useFactory: getTestScheduler },
        { provide: ESCALATION_WAIT_TIME, useValue: 60 },
      ],
    });

    retryer = TestBed.get(RetryWithEscalation);
  });

  describe(`when an unhandled exception occurs`, () => {
    it(`should throw the error`, () => {
      const error = new Error('foobar');

      const stream = cold('#', {}, error).pipe(
        retryer.retryWithEscalation('foo'),
      );

      (expect(stream) as any).toBeObservable(cold('#', {}, error));
    });
  });

  describe(`when an http exception occurs`, () => {
   it(`re-throws a non 403 status code`, () => {
     actions = hot('');
     const error = new HttpErrorResponse({status: 404});

      const stream = cold('#', {}, error).pipe(
        retryer.retryWithEscalation('foo'),
      );

      (expect(stream) as any).toBeObservable(cold('#', {}, error));
   });

    describe(`when the inital action is valid`, () => {
      const http403Error = new HttpErrorResponse({status: 403});

      it(`should pass through a success`, () => {
        actions = hot('a', {a: {}});

        const stream = cold('a', {a: {foo: 'bar'}}).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(cold('a', {a: {foo: 'bar'}}));
      });

      it(`should retry the observable if it succeeds`, () => {
        const err = new Error('Failed to escalate token');

        const actionStreamActions = {
          // a: {retries: 0, type: 'bar'},
          b: new JwtActions.EscalationSuccess<MockClaimMap>('foo'),
        };

        let errored = false;

        actions      =  hot('-----b', actionStreamActions);
        const output = cold('a-----a--b', {a: 1, b: 2}, err);
        const stream = cold('a--b', {a: 1, b: 2}).pipe(
          tap((n) => {
            if (n === 2 && !errored) {
              errored = true;
              throw http403Error;
            }
          }),
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });

      it(`should retry the observable if it succeeds but reraise if it fails again`, () => {
        const actionStreamActions = {
          b: new JwtActions.EscalationSuccess<MockClaimMap>('foo'),
        };

        actions      =  hot('-----b', actionStreamActions);
        const output = cold('a-----a--#', {a: 1}, http403Error);
        const stream = cold('a--#', {a: 1, b: 2}, http403Error).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });

      it(`should throw an error if the escalation fails`, () => {
        const err = new Error('Failed to escalate token');

        const actionStreamActions = {
          a: {retries: 0, type: 'bar'},
          b: new JwtActions.EscalationFailed<MockClaimMap>('foo'),
        };
        actions      =  hot('a--b', actionStreamActions);
        const output = cold('---#', { }, err);

        const stream = cold('#', {}, http403Error).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });

      it(`should automatically fail a escalation request that goes unfulfilled`, () => {
        const err = new Error('Failed to escalate token');

        actions      =  hot('-------');
        const output = cold('------#', { }, err);

        const stream = cold('#', {}, http403Error).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });
    });
  });
});


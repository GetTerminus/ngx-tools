import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { getStoreValue } from './get-store-value';


export interface UserArgs {
  id: number;
  firstName: string;
  lastName: string;
}
export class User {
  public firstName: string;
  public lastName: string;
  public id: number;

  constructor({firstName, lastName, id}: UserArgs) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const userMock = new User({firstName: 'foo', lastName: 'bar', id: 10});

/**
 * Standard mockstore that can be used in unittests to mock a @ngrx/store
 *
 * https://github.com/ngrx/store/issues/128#issuecomment-316654714
 */
export class MockStore {
  reducers = new Map<string, BehaviorSubject<any>>();

  /**
   * Simple solution to support selecting/subscribing to this mockstore as usual.
   *
   * @param name - Reducer name
   * @returns {undefined|BehaviorSubject<any>}
   */
  select(name) {
    if (!this.reducers.has(name)) {
      this.reducers.set(name, new BehaviorSubject({}));
    }
    return this.reducers.get(name);
  }

  /**
   * Used to set a fake state
   *
   * @param reducerName - The name of your reducer
   * @param data - The mock data
   */
  mockState(reducerName, data) {
    this.select(reducerName).next(data);
  }

  dispatch(data: any) {
    // ...
  }
}


describe(`getStoreValue`, () => {
  let storeMock;

  beforeEach(() => {
    storeMock = new MockStore();
    storeMock.mockState('users', [userMock]);
  });


  test(`should return the value of the store`, () => {
    const stateValue = getStoreValue(storeMock.select('users'));
    expect(stateValue).toEqual([userMock]);
  });

});

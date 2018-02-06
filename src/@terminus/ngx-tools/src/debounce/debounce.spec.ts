// tslint:disable: no-unused-variable
import { debounce } from './debounce';


describe(`debounce`, () => {
  let func;
  let debounced;

  beforeEach(() => {
    func = jasmine.createSpy('func');
    debounced = debounce(func, 200);
  });


  test(`should debounce all calls for the 'wait' period`, (done) => {
    for (const i of [1, 2, 3]) {
      debounced();
    }

    setTimeout(() => {
      expect(func).toHaveBeenCalledTimes(1);
      done();
    }, 201);
  });


  test(`should allow multiple calls if called after the wait period`, (done) => {
    const TEST_DELAY = 210;

    for (const i of [1, 2, 3]) {
      debounced();
    }

    setTimeout(() => {
      debounced();
    }, TEST_DELAY);

    setTimeout(() => {
      expect(func).toHaveBeenCalledTimes(2);
      done();
    }, TEST_DELAY * 2);
  });

});

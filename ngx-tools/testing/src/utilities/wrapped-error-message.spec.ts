import { wrappedErrorMessage } from './wrapped-error-message';


describe(`wrappedErrorMessage`, () => {

  test(`should return a RegExp`, () => {
    const err: Error = new Error('foo');
    const actual: RegExp = wrappedErrorMessage(err);

    expect(actual instanceof RegExp).toBeTruthy();
    expect(actual).toEqual(/foo/);
  });

});

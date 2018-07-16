import { objectDeepParse } from './object-deep-parse';

describe(`objectDeepParse`, () => {
  const stringInput = 'name';
  const objectInput = {foo: {bar: {baz: 'xyz'}}};

  test(`should output same string value when input is a string`, () => {
    expect(objectDeepParse(stringInput, [])).toEqual(stringInput);
  });

  test(`should output the deep down parsed value when input is an object`, () => {
    expect(objectDeepParse(objectInput, ['foo', 'bar', 'baz'])).toEqual('xyz');
  });

  test(`should ignore the path input when input is a string`, () => {
    expect(objectDeepParse(stringInput, ['foo', 'bar'])).toEqual(stringInput);
  });
});

import { isString } from './is-string';


describe(`isString`, () => {
  const obj = {foo: 'bar'};

  const string1 = 'foo';
  const string2 = `${string1}`;
  // tslint:disable: no-construct
  const string3 = new String(string1);
  // tslint:enable: no-construct
  const string4 = obj.foo;

  const nonString1 = {};
  const nonString2 = [];
  const nonString3 = () => true;


  test(`should return true for string values`, () => {
    expect(isString(string1)).toEqual(true);
    expect(isString(string2)).toEqual(true);
    expect(isString(string3)).toEqual(true);
    expect(isString(string4)).toEqual(true);
  });


  test(`should return false for non-string values`, () => {
    expect(isString(nonString1)).toEqual(false);
    expect(isString(nonString2)).toEqual(false);
    expect(isString(nonString3)).toEqual(false);
  });

});

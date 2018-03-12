import { isString } from './is-string';


describe(`isString`, () => {
  const obj = {foo: 'bar'};
  const myString = 'foo';
  const validStrings: any[] = [
    'foo',
    `${myString}`,
    // tslint:disable: no-construct
    new String(myString),
    // tslint:enable: no-construct
    obj.foo,
  ];
  const invalidStrings: any[] = [
    {},
    [],
    () => true,
    null,
    undefined,
  ];


  test(`should return true for string values`, () => {
    for (const test of validStrings) {
      expect(isString(test)).toEqual(true);
    }
  });


  test(`should return false for non-string values`, () => {
    for (const test of invalidStrings) {
      expect(isString(test)).toEqual(false);
    }
  });

});

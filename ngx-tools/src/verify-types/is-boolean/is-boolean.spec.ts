import { isBoolean } from './is-boolean';


describe(`isBoolean`, () => {
  const validBooleans: any[] = [
    true,
    false,
    // tslint:disable: no-construct
    new Boolean(true),
    // tslint:enable: no-construct
  ];

  const invalidBooleans: any[] = [
    null,
    undefined,
    'foo',
    [],
    {},
    () => true,
  ];


  test(`should return true for a boolean value`, () => {
    for (const test of validBooleans) {
      expect(isBoolean(test)).toEqual(true);
    }
  });


  test(`should return false for a non-boolean value`, () => {
    for (const test of invalidBooleans) {
      expect(isBoolean(test)).toEqual(false);
    }
  });

});

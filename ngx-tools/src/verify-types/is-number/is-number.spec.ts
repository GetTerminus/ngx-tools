import { isNumber } from './is-number';


describe(`isNumber`, function() {
  const validNumbers: any[] = [
    0,
    1,
    3456.3456,
    -145.2,
  ];

  const invalidNumbers: any = [
    'foo',
    null,
    undefined,
    () => {},
  ];


  test(`should return true for functions`, () => {
    for (const test of validNumbers) {
      expect(isNumber(test)).toEqual(true);
    }
  });


  test(`should return false for non-functions`, () => {
    for (const test of invalidNumbers) {
      expect(isNumber(test)).toEqual(false);
    }
  });

});

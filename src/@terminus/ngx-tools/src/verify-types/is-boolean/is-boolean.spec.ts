import { isBoolean } from './is-boolean';


describe(`isBoolean`, () => {
  const bool1 = true;
  const bool2 = false;

  const nonBool1 = null;
  const nonBool2 = undefined;
  const nonBool3 = 'foo';
  const nonBool4 = [];
  const nonBool5 = {};
  const nonBool6 = () => true;
  // tslint:disable: no-construct
  const nonBool7 = new Boolean(true);
  // tslint:enable: no-construct


  test(`should return true for a boolean value`, () => {
    expect(isBoolean(bool1)).toEqual(true);
    expect(isBoolean(bool2)).toEqual(true);
  });


  test(`should return false for a non-boolean value`, () => {
    expect(isBoolean(nonBool1)).toEqual(false);
    expect(isBoolean(nonBool2)).toEqual(false);
    expect(isBoolean(nonBool3)).toEqual(false);
    expect(isBoolean(nonBool4)).toEqual(false);
    expect(isBoolean(nonBool5)).toEqual(false);
    expect(isBoolean(nonBool6)).toEqual(false);
    // NOTE: This test returns false for Boolean objects
    expect(isBoolean(nonBool7)).toEqual(false);
  });

});

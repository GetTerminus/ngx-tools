import { isBoolean } from './is-boolean';


describe(`isBoolean`, () => {
  const bool1 = true;
  const bool2 = false;
  // tslint:disable: no-construct
  const bool3 = new Boolean(true);
  // tslint:enable: no-construct

  const nonBool1 = null;
  const nonBool2 = undefined;
  const nonBool3 = 'foo';
  const nonBool4 = [];
  const nonBool5 = {};
  const nonBool6 = () => true;


  test(`should return true for a boolean value`, () => {
    expect(isBoolean(bool1)).toEqual(true);
    expect(isBoolean(bool2)).toEqual(true);
    expect(isBoolean(bool3)).toEqual(true);
  });


  test(`should return false for a non-boolean value`, () => {
    expect(isBoolean(nonBool1)).toEqual(false);
    expect(isBoolean(nonBool2)).toEqual(false);
    expect(isBoolean(nonBool3)).toEqual(false);
    expect(isBoolean(nonBool4)).toEqual(false);
    expect(isBoolean(nonBool5)).toEqual(false);
    expect(isBoolean(nonBool6)).toEqual(false);
  });

});

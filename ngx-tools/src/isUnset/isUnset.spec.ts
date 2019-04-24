import { isUnset } from './isUnset';

describe(`isUnset`, () => {
  test(`should return true when passed null`, () => {
    const input: any = null;

    expect(isUnset(input)).toEqual(true);
  });

  test(`should return true when passed undefined`, () => {
    const input: any = undefined;

    expect(isUnset(input)).toEqual(true);
  });

  test(`should return false when passed number`, () => {
    const input: any = 4;

    expect(isUnset(input)).toEqual(false);
  });

  test(`should return false when passed string`, () => {
    const input: any = 'foo';

    expect(isUnset(input)).toEqual(false);
  });
});

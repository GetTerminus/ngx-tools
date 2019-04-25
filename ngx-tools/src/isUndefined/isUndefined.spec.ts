import { isUndefined } from './isUndefined';

describe(`isUndefined`, () => {
  test(`should return true when passed undefined`, () => {
    const input: any = undefined;

    expect(isUndefined(input)).toEqual(true);
  });

  test(`should return false when passed null`, () => {
    const input: any = null;

    expect(isUndefined(input)).toEqual(false);
  });

  test(`should return false when passed number`, () => {
    const input: any = 60;

    expect(isUndefined(input)).toEqual(false);
  });

  test(`should return false when passed string`, () => {
    const input: any = 'bar';

    expect(isUndefined(input)).toEqual(false);
  });
});

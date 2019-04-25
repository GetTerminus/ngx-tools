import { isNull } from './isNull';

describe(`isNull`, () => {
  test(`should return true when passed null`, () => {
    const input: any = null;

    expect(isNull(input)).toEqual(true);
  });

  test(`should return false when passed undefined`, () => {
    const input: any = undefined;

    expect(isNull(input)).toEqual(false);
  });

  test(`should return false when passed number`, () => {
    const input: any = 2;

    expect(isNull(input)).toEqual(false);
  });

  test(`should return false when passed string`, () => {
    const input: any = 'foo';

    expect(isNull(input)).toEqual(false);
  });
});

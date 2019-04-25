import { isSet } from './isSet';

describe(`isSet`, () => {
  test(`should return true when passed number`, () => {
    const input: any = 5;

    expect(isSet(input)).toEqual(true);
  });

  test(`should return true when passed string`, () => {
    const input: any = 'bar';

    expect(isSet(input)).toEqual(true);
  });

  test(`should return true when passed true boolean`, () => {
    const input: any = true;

    expect(isSet(input)).toEqual(true);
  });

  test(`should return true when passed true string`, () => {
    const input: any = 'true';

    expect(isSet(input)).toEqual(true);
  });

  test(`should return true when passed false boolean`, () => {
    const input: any = false;

    expect(isSet<Boolean>(input)).toEqual(true);
  });

  test(`should return true when passed false string`, () => {
    const input: any = 'false';

    expect(isSet(input)).toEqual(true);
  });

  test(`should return true when passed null`, () => {
    const input: any = null;

    expect(isSet(input)).toEqual(true);
  });

  test(`should return false when passed undefined`, () => {
    const input: any = undefined;

    expect(isSet(input)).toEqual(false);
  });

  describe(`if type is passed along with input`, () => {
    test(`should return true when passed number`, () => {
      const input: any = 5;

      expect(isSet<number>(input)).toEqual(true);
    });

    test(`should return true when passed string`, () => {
      const input: any = 'bar';

      expect(isSet<string>(input)).toEqual(true);
    });

    test(`should return true when passed true boolean`, () => {
      const input: any = true;

      expect(isSet<Boolean>(input)).toEqual(true);
    });

    test(`should return true when passed true string`, () => {
      const input: any = 'true';

      expect(isSet<Boolean>(input)).toEqual(true);
    });

    test(`should return true when passed false boolean`, () => {
      const input: any = false;

      expect(isSet<Boolean>(input)).toEqual(true);
    });

    test(`should return true when passed false string`, () => {
      const input: any = 'false';

      expect(isSet<Boolean>(input)).toEqual(true);
    });

    test(`should return true when passed null`, () => {
      const input: any = null;

      expect(isSet<any>(input)).toEqual(true);
    });

    test(`should return false when passed undefined`, () => {
      const input: any = undefined;

      expect(isSet<undefined>(input)).toEqual(false);
    });
  });

});

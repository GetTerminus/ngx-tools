import { coerceDateProperty } from './date-property';


describe(`coerceDateProperty`, () => {

  test(`should coerce undefined to 0 or default`, () => {
    expect(coerceDateProperty(undefined)).toBe(0);
    expect(coerceDateProperty(undefined, 111)).toBe(111);
  });


  test(`should coerce null to 0 or default`, () => {
    expect(coerceDateProperty(null)).toBe(0);
    expect(coerceDateProperty(null, 111)).toBe(111);
  });


  test(`should coerce true to 0 or default`, () => {
    expect(coerceDateProperty(true)).toBe(0);
    expect(coerceDateProperty(true, 111)).toBe(111);
  });


  test(`should coerce false to 0 or default`, () => {
    expect(coerceDateProperty(false)).toBe(0);
    expect(coerceDateProperty(false, 111)).toBe(111);
  });


  test(`should coerce the empty string to 0 or default`, () => {
    expect(coerceDateProperty('')).toBe(0);
    expect(coerceDateProperty('', 111)).toBe(111);
  });


  test(`should coerce an RFC1123 date`, () => {
    const expectedDate = new Date('Tue, 15 Nov 1994 08:12:31 GMT');
    const inputRFC1123String = 'Tue, 15 Nov 1994 08:12:31 GMT';
    expect(coerceDateProperty(inputRFC1123String).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
    expect(coerceDateProperty(inputRFC1123String, new Date()).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
  });


  test(`should coerce an RFC2822 date`, () => {
    const inputRFC2822String = 'Mon, 25 Dec 1995 13:30:00 +0430';
    const expectedDate = new Date('Mon, 25 Dec 1995 13:30:00 +0430');
    expect(coerceDateProperty(inputRFC2822String).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
    expect(coerceDateProperty(inputRFC2822String, new Date()).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
  });
});

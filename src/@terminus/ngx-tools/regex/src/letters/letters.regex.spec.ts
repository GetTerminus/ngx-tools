import { lettersRegex } from './letters.regex';

const validStrings = [
  'foo',
  'KEOSInjdiuw',
];
const invalidStrings = [
  'foo1',
  'foo/bar',
  'foo-bar',
  'foo_bar',
  'foo:bar',
  'foo+bar',
  '&',
];


describe(`lettersRegex`, () => {

  test(`should return true for strings with only letters`, () => {
    for (const str of validStrings) {
      expect(lettersRegex.test(str)).toEqual(true);
    }
  });


  test(`should return false for strings with anything other than letters`, () => {
    for (const str of invalidStrings) {
      expect(lettersRegex.test(str)).toEqual(false);
    }
  });

});

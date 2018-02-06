import { passwordRegex } from './password.regex';

const validPasswords = [
  `7GmfvH`,
  `V9Cpp7RGB9`,
  `29N74UV9ogt2UKpT3pZN3oLngp8Trkk4mCZfCgdE`,
  /* tslint:disable:max-line-length */
  `FQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN`,
  /* tslint-enable:max-line-length */
];
const invalidPasswords = [
  // empty
  ``, // this will get caught by the first `!control.value`
  // too short
  `MA9Lv`,
  // no numbers
  `xnhoQzDwAv`,
  // symbol
  `yGiUf>DfQ2`,
  // space
  `FQ49j BQ29`,
  /* tslint:disable:max-line-length */
  // too long
  `FQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN1`,
  /* tslint-enable:max-line-length */
];


describe(`passwordRegex`, () => {

  test(`should return true for valid passwords`, () => {
    expect(passwordRegex.test(validPasswords[0])).toEqual(true);
    expect(passwordRegex.test(validPasswords[1])).toEqual(true);
    expect(passwordRegex.test(validPasswords[2])).toEqual(true);
    expect(passwordRegex.test(validPasswords[3])).toEqual(true);
  });


  test(`should return false for invalid passwords`, () => {
    expect(passwordRegex.test(invalidPasswords[0])).toEqual(false);
    expect(passwordRegex.test(invalidPasswords[1])).toEqual(false);
    expect(passwordRegex.test(invalidPasswords[2])).toEqual(false);
    expect(passwordRegex.test(invalidPasswords[3])).toEqual(false);
    expect(passwordRegex.test(invalidPasswords[4])).toEqual(false);
    expect(passwordRegex.test(invalidPasswords[5])).toEqual(false);
  });

});

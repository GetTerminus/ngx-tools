import { emailRegex } from './email.regex';

// Valid card numbers can be found here: https://stripe.com/docs/testing
const validEmails = [
  `foo@bar.co`,
  `foo@bar.baz.net`,
];
const invalidEmails = [
  `foo`,
  `foo@`,
  `foo@bar`,
  `foo@bar.`,
  `foo@bar.c`,
];


describe(`emailRegex`, () => {

  test(`should return true for valid emails`, () => {
    expect(emailRegex.test(validEmails[0])).toEqual(true);
    expect(emailRegex.test(validEmails[1])).toEqual(true);
  });


  test(`should return false for invalid emails`, () => {
    expect(emailRegex.test(invalidEmails[0])).toEqual(false);
    expect(emailRegex.test(invalidEmails[1])).toEqual(false);
    expect(emailRegex.test(invalidEmails[2])).toEqual(false);
    expect(emailRegex.test(invalidEmails[3])).toEqual(false);
    expect(emailRegex.test(invalidEmails[4])).toEqual(false);
  });

});

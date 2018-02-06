import { creditCardRegex } from './credit-card.regex';

// Valid card numbers can be found here: https://stripe.com/docs/testing
const validNumbers = [
  `4242424242424242`,
  `38520000023237`,
  `6011111111111117`,
  `378282246310005`,
];
const invalidNumbers = [
  `1234`,
  ``,
  `e`,
  `test@test.com`,
  `3852000023237`,
  `424242424242424242`,
];


describe(`creditCardRegex`, () => {

  test(`should return true for valid card numbers`, () => {
    expect(creditCardRegex.test(validNumbers[0])).toEqual(true);
    expect(creditCardRegex.test(validNumbers[1])).toEqual(true);
    expect(creditCardRegex.test(validNumbers[2])).toEqual(true);
    expect(creditCardRegex.test(validNumbers[3])).toEqual(true);
  });


  test(`should return false for invalid card numbers`, () => {
    expect(creditCardRegex.test(invalidNumbers[0])).toEqual(false);
    expect(creditCardRegex.test(invalidNumbers[1])).toEqual(false);
    expect(creditCardRegex.test(invalidNumbers[2])).toEqual(false);
    expect(creditCardRegex.test(invalidNumbers[3])).toEqual(false);
    expect(creditCardRegex.test(invalidNumbers[4])).toEqual(false);
    expect(creditCardRegex.test(invalidNumbers[5])).toEqual(false);
  });

});

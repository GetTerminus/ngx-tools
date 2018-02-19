import { numberRegex } from './numbers.regex';

const validNumbers = [
  '0',
  '12.5',
  '.5',
  '5.',
  '-5',
  '-5.',
  '-.5',
  '1234567890',
];
const invalidNumbers: any = [
  'aaa',
  '',
  'lkjh',
  0 / 0,
  1 / 0,
  '1Kg',
  '1 Kg',
  false,
  true,
];


describe(`numberRegex`, () => {

  test(`should return true for strings containing only numbers`, () => {
    for (const num of validNumbers) {
      expect(numberRegex.test(num)).toEqual(true);
    }
  });


  test(`should return false for strings containing anything other than only numbers`, () => {
    for (const num of invalidNumbers) {
      expect(numberRegex.test(num)).toEqual(false);
    }
  });

});




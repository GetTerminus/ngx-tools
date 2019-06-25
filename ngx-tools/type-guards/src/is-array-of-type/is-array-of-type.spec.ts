import {
  isNumber,
  isObject,
  isString,
} from '@terminus/ngx-tools';
import { isArrayOfType } from './is-array-of-type';


describe(`isArrayOfType`, function() {
  const numbersArray1: number[] = [1, 2, 3, 4];
  const numbersArray2: any[] = ['1', 2, '3', 4];
  const stringArray: string[] = ['1', 'two', '3', 'four'];
  const objArray1: any[] = [{foo: 'bar'}, {foo: 'baz'}];
  const objArray2: any[] = [{foo: 'bar'}, {foo: 1}];
  const digit = 5;
  const mixedArray: any[] = [1, 'two', 3, 'four', {five: 5}];
  const word = 'foo';
  const obj1: any = {foo: 'bar'};
  const obj2: any = {foo: 2};
  const numberArrays = [numbersArray1, numbersArray2, [mixedArray[0], mixedArray[2]], objArray2[1].foo, digit, obj2.foo];
  // eslint-disable-next-line max-len
  const stringArrays = [stringArray, [mixedArray[1], mixedArray[3]], [objArray1[0].foo, objArray1[1].foo], objArray2[0].foo, word, obj1.foo];
  const objArrays = objArray1.concat(objArray2);


  test(`should return true when all array members are of the type number`, () => {
    for (const test of numberArrays) {
      expect(isArrayOfType(test, isNumber)).toEqual(true);
    }
  });


  test(`should return true when all array members are of the type string`, () => {
    for (const test of stringArrays) {
      expect(isArrayOfType(test, isString)).toEqual(true);
    }
  });


  test(`should return true when all array members are of the type object`, () => {
    for (const test of objArrays) {
      expect(isArrayOfType(test, isObject)).toEqual(true);
    }
  });


  test(`should return false when all array members are not of the type number`, () => {
    const isValid = isArrayOfType(mixedArray, isNumber);

    expect(isValid).toEqual(false);
  });


  test(`should return false when all array members are not of the type string`, () => {
    const isValid = isArrayOfType(mixedArray, isString);

    expect(isValid).toEqual(false);
  });


  test(`should return false when all array members are not of the type object`, () => {
    const isValid = isArrayOfType(mixedArray, isObject);

    expect(isValid).toEqual(false);
  });

});

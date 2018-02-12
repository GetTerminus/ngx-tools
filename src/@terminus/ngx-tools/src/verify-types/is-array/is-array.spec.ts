import { isArray  } from './is-array';


describe(`isArray`, () => {
  const arr1 = [];
  const arr2 = new Array(3);
  const arr3 = Array.from([1, 2, 3], (x) => x + x);
  const arr4 = Array.of('foo');

  const nonArr1 = {};
  const nonArr2 = 'foo';
  const nonArr3 = 2;
  const nonArr4 = true;
  const nonArr5 = null;
  const nonArr6 = undefined;


  test(`should return true for arrays`, () => {
    expect(isArray(arr1)).toEqual(true);
    expect(isArray(arr2)).toEqual(true);
    expect(isArray(arr3)).toEqual(true);
    expect(isArray(arr4)).toEqual(true);
  });


  test(`should return false for non-arrays`, () => {
    expect(isArray(nonArr1)).toEqual(false);
    expect(isArray(nonArr2)).toEqual(false);
    expect(isArray(nonArr3)).toEqual(false);
    expect(isArray(nonArr4)).toEqual(false);
    expect(isArray(nonArr5)).toEqual(false);
    expect(isArray(nonArr6)).toEqual(false);
  });

});

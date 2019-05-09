import { isNumber } from './../verify-types/is-number/is-number';


/**
 * Round a number
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#A_better_solution
 *
 * @example
 * roundNumber(1.050, 1) // Returns `1.1`
 * roundNumber(3456.3456, 1) // Returns `3456.3`
 * roundNumber(3456.3456, -2) // Returns `3500`
 * roundNumber(3456.3456, -2) // Returns `3500`
 * roundNumber('1.23e+5', -4) // Returns `120000`
 *
 * @param num - The number to round (also accepting strings for exponential support)
 * @param precision - How precise to make the rounding
 * @return The rounded number
 */
export function roundNumber(num: number | string, precision = 0): number | undefined {
  if (!isNumber(num)) {
    return undefined;
  }

  const shift = function(innerNum: number | string, innerPrecision: number): number {
    const numArray = innerNum.toString().split('e');
    return +(`${numArray[0]}e${numArray[1] ? (+numArray[1] + innerPrecision) : innerPrecision}`);
  };

  return shift(Math.round(shift(num, +precision)), -precision);
}

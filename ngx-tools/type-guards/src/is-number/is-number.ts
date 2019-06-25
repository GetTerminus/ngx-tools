/**
 * Determine if a value is a number
 *
 * @param value - The value to check
 * @return The result
 *
 * @example
 * isNumber(2)   // Returns: true
 * isNumber('2') // Returns: true
 * isNumber('a') // Returns: false
 */
// tslint:disable-next-line no-any
export function isNumber(value: any): value is number {
  // tslint:disable-next-line no-unsafe-any
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

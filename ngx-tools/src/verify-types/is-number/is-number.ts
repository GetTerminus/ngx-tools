/**
 * Determine if a value is a number
 *
 * @example
 * isNumber(2) // Returns: true
 * isNumber('2') // Returns: true
 * isNumber('a') // Returns: false
 *
 * @param value - The value to check
 * @return The result (if the value is a number)
 */
// tslint:disable-next-line no-any
export function isNumber(value: any): value is number {
  // tslint:disable-next-line no-unsafe-any
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

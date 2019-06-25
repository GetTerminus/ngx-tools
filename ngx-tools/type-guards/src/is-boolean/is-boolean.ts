/**
 * Determine if a value is a boolean
 *
 * @param value - The value to test
 * @return The result
 *
 * @example
 * isBoolean(true);  // Returns: true
 * isBoolean('foo'); // Returns: false
 */
// tslint:disable-next-line no-any
export function isBoolean(value: any): value is boolean {
  return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}

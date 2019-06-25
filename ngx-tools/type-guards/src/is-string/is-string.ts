/**
 * Determine if a value is a string
 *
 * @param x - The value to test
 * @return The result
 *
 * @example
 * isString('foo'); // Returns: true
 * isString({});    // Returns: false
 */
// tslint:disable-next-line no-any
export function isString(x: any): x is string {
  // eslint-disable-next-line no-new-wrappers
  return !!(typeof x === 'string' || x instanceof String);
}

/**
 * Determine if a value is a string
 *
 * @example
 * isString('foo'); // Returns true
 * isString({}); // Returns false
 *
 * @param value - The value to test
 * @return The result
 */
// tslint:disable-next-line no-any
export function isString(value: any): value is string {
  // eslint-disable-next-line no-new-wrappers
  return !!(typeof value === 'string' || value instanceof String);
}

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
export function isString(value: any): boolean {
  return !!(typeof value === 'string' || value instanceof String);
}

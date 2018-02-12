/**
 * Determine if a value is a string
 *
 * @param value - The value to test
 * @return The result
 */
export function isString(value: any): boolean {
  return !!(typeof value === 'string' || value instanceof String);
}

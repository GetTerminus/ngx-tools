/**
 * Determine if a value is a boolean
 *
 * NOTE: This test returns false for Boolean objects (eg `new Boolean(true)`)
 *
 * @param value - The value to test
 * @return The result
 */
export function isBoolean(value: any): boolean {
  return value === true || value === false || toString.call(value) === '[object Boolean]';
}

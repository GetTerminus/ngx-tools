/**
 * Determine if a value is a boolean
 *
 * @param value - The value to test
 * @return The result
 */
export function isBoolean(value: any): boolean {
  return value === true || value === false ||
    Object.prototype.toString.call(value) === '[object Boolean]';
}

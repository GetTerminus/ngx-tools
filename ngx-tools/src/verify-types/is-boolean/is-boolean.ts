/**
 * Determine if a value is a boolean
 *
 * @example
 * const myVar1 = true;
 * isBoolean(myVar1); // Returns true
 * const myVar2 = 'foo';
 * isBoolean(myVar2); // Returns false
 *
 * @param value - The value to test
 * @return The result
 */
export function isBoolean(value: any): boolean {
  return value === true || value === false ||
    Object.prototype.toString.call(value) === '[object Boolean]';
}

/**
 * Determine if an item is null
 *
 * @param x - The value to test
 * @return The result
 *
 * @example
 * isNull(null) // Returns: true
 * isNull(1)    // Returns: false
 */
// tslint:disable-next-line no-any
export function isNull(x: any): x is null {
  return x === null;
}

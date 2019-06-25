/**
 * Determine if an item is an Array
 *
 * NOTE: This is the fastest performer across all primary browsers.
 *
 * @param item - The item to test
 * @return The result
 *
 * @example
 * isArray([1, 2]);                 // Returns: true
 * isArray<string>(['foo', 'bar']); // Returns: true
 * isArray('foo');                  // Returns: false
 */
// tslint:disable-next-line no-any
export function isArray<T>(item: T[] | any): item is Array<T> {
  // tslint:disable-next-line no-unsafe-any
  return !!(item && item.constructor === Array);
}

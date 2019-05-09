/**
 * Determine if an item is an Array
 *
 * NOTE: This is the fastest performer across all primary browsers
 *
 * @example
 * const myVar1 = [1, 2];
 * isArray(myVar1); // Returns true
 * const myVar2 = 'hi';
 * isArray(myVar2); // Returns false
 *
 * @param item - The item to test
 * @return The result
 */
// tslint:disable-next-line no-any
export function isArray<T>(item: T[] | any): item is Array<T> {
  // tslint:disable-next-line no-unsafe-any
  return !!(item && item.constructor === Array);
}

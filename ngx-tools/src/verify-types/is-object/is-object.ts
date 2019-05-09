/**
 * Determine if an item is an object
 *
 * @example
 * isObject({}); // Returns true
 * isObject('foo'); // Returns true
 *
 * @param item - The item to test
 * @return The result
 */
// tslint:disable-next-line no-any
export function isObject(item: any): item is object {
  return Object.prototype.toString.call(item) === '[object Object]';
}

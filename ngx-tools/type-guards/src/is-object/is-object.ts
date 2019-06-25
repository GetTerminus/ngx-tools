/**
 * Determine if an item is an object
 *
 * @param x - The item to test
 * @return The result
 *
 * @example
 * isObject({}); // Returns true
 * isObject('foo'); // Returns false
 */
// tslint:disable-next-line no-any
export function isObject(x: any): x is object {
  return Object.prototype.toString.call(x) === '[object Object]';
}

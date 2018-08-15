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
export function isObject(item: any): item is object {
  return Object.prototype.toString.call(item) === '[object Object]';
}

/**
 * Determine if an item is an object
 *
 * @param item - The item to test
 * @return The result
 */
export function isObject(item: any): boolean {
  return Object.prototype.toString.call(item) === '[object Object]';
}

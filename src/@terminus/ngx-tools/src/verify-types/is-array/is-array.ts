/**
 * Determine if an object is an Array
 *
 * NOTE: This is the fastest performer across browsers
 *
 * @param item - The item to test
 * @return The result
 */
export function isArray(item: any): boolean {
  return !!(item && item.constructor === Array);
}

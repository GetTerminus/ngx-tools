/**
 * Determine if an object is a function
 *
 * NOTE: While this isn't the fastest performing test in every browser, it is the faster when
 * averaged across the browsers we care about.
 *
 * @param item - The item to test
 * @return The result
 */
export function isFunction(item: any): boolean {
  return !!(item && item.constructor && item.call && item.apply);
}

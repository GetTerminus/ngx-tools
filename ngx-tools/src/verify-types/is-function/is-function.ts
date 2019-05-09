/**
 * Determine if an item is a function
 *
 * NOTE: While this isn't the fastest performing test in every browser, it is the faster when averaged across the browsers we care about.
 *
 * @example
 * isFunction(() => {}); // Returns true
 * isFunction('foo'); // Returns false
 *
 * @param item - The item to test
 * @return The result
 */
// tslint:disable-next-line no-any
export function isFunction(item: any): item is Function {
  // tslint:disable-next-line no-unsafe-any
  return !!(item && item.constructor && item.call && item.apply);
}

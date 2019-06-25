/**
 * Determine if an item is a function
 *
 * NOTE: While this isn't the fastest performing test in every browser, it is the faster when averaged across the browsers we care about.
 *
 * @param x - The item to test
 * @return The result
 *
 * @example
 * isFunction(() => {}); // Returns: true
 * isFunction('foo');    // Returns: false
 */
// tslint:disable-next-line no-any
export function isFunction(x: any): x is Function {
  // tslint:disable-next-line no-unsafe-any
  return !!(x && x.constructor && x.call && x.apply);
}

import { isUndefined } from './../is-undefined/is-undefined';


/**
 * Determine if the item has a value
 *
 * @param x - The value being tested
 * @return The result
 *
 * @example
 * isSet<string>('hi')   // Returns: true
 * isSet<number>(void 0) // Returns: false
 */
// tslint:disable-next-line no-any
export function isSet<T>(x: any): x is T {
  return !isUndefined(x);
}

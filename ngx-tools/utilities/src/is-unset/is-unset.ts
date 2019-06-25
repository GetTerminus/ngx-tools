import {
  isNull,
  isUndefined,
} from '@terminus/ngx-tools/type-guards';


/**
 * Helper function to determine if input is unset.
 *
 * @param input - the input being tested
 * @return boolean
 *
 * @example
 * isUnset(null);      // Returns: true
 * isUnset(undefined); // Returns: true
 * isUnset('hello');   // Returns: false
 */
// tslint:disable-next-line no-any
export function isUnset(x: any): boolean {
  return isNull(x) || isUndefined(x);
}

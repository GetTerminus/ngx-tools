import { isNull } from '../isNull/isNull';
import { isUndefined } from '../isUndefined/isUndefined';

/**
 * Helper function to determine if input is unset.
 *
 * @param input - the input being tested
 * @return boolean
 */
export function isUnset(input: any): boolean {
  return isNull(input) || isUndefined(input);
}

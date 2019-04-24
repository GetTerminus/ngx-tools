import { isUndefined } from '../isUndefined/isUndefined';

/**
 * Helper function to determine if input is set. This allows type coercion of the input.
 *
 * @param input - the input being tested
 * @return boolean
 */
export function isSet<T>(input: any): input is T {
  return !isUndefined(input);
}

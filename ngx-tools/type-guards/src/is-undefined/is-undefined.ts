/**
 * Helper function to determine if input is undefined.
 *
 * @param input - the input being tested
 * @return boolean
 *
 * @example
 * isUndefined(undefined) // Returns: true
 * isUndefined(null)      // Returns: false
 * isUndefined('foo')     // Returns: false
 */
// tslint:disable-next-line no-any
export function isUndefined(input: any): input is undefined {
  return input === undefined;
}


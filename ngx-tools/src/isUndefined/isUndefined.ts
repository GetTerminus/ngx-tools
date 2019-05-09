/**
 * Helper function to determine if input is undefined.
 *
 * @param input - the input being tested
 * @return boolean
 */
// tslint:disable-next-line no-any
export function isUndefined(input: any): input is undefined {
  return input === undefined;
}


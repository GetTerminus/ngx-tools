/**
 * Helper function to determine if input is null.
 *
 * @param input - the input being tested
 * @return boolean
 */
// tslint:disable-next-line no-any
export function isNull(input: any): input is null {
  return input === null;
}

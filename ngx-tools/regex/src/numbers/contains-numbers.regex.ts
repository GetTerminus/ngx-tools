/**
 * Define a regex to validate a string contains at least one number
 */
export const containsNumbersRegex = /(.*([0-9]+\.?[0-9]*).*)/;


/**
 * Create a regex that requires a minimum amount of numbers
 *
 * @example
 * const reg = createContainsNumbersRegex(2);
 * reg.test('abc#1d') // Returns false
 * reg.test('abc#12d') // Returns true
 *
 * @param minimum - The minimum amount of number characters required
 * @return The regex
 */
export function createContainsNumbersRegex(minimum: number): RegExp {
  return new RegExp(`(.*([0-9]+\.?[0-9]*).*){${minimum},}`);
}

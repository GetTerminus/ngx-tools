/**
 * Define a regex to validate a string contains at least one uppercase letter
 */
export const containsUppercaseRegex = /(.*[A-Z].*)/;


/**
 * Create a regex that requires a minimum amount of uppercase characters
 *
 * @example
 * const reg = createContainsUppercaseRegex(2);
 * reg.test('aBc#1d') // Returns false
 * reg.test('Abc#12D') // Returns true
 *
 * @param minUppercaseCount - The minimum amount of uppercase characters required
 * @return The regex
 */
export function createContainsUppercaseRegex(minUppercaseCount: number): RegExp {
  return new RegExp(`(.*[A-Z].*){${minUppercaseCount},}`);
}

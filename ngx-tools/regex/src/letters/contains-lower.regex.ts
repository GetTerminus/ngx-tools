/**
 * Define a regex to validate a string contains at least one lowercase letter
 */
export const containsLowercaseRegex = /(.*[a-z].*)/;


/**
 * Create a regex that requires a minimum amount of lowercase characters
 *
 * @example
 * const reg = createContainsLowercaseRegex(3);
 * reg.test('aBC#1d') // Returns false
 * reg.test('aBC#12D') // Returns true
 *
 * @param minimum - The minimum amount of lowercase characters required
 * @return The regex
 */
export function createContainsLowercaseRegex(minimum: number): RegExp {
  return new RegExp(`(.*[a-z].*){${minimum},}`);
}

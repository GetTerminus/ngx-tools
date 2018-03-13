/**
 * Define a regex to validate a string contains at least one uppercase letter
 */
export const containsUppercaseRegex = /(.*[A-Z].*)/;


/**
 * Create a regex that requires a minimum amount of uppercase characters
 *
 * @param minUppercaseCount - The minimum amount of uppercase characters allowed
 * @return The regex
 */
export function createContainsUppercaseRegex(minUppercaseCount: number): RegExp {
  return new RegExp(`(.*[A-Z].*){${minUppercaseCount},}`)
}

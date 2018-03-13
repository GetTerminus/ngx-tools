/**
 * Define a regex to validate a string contains at least one lowercase letter
 */
export const containsLowercaseRegex = /(.*[a-z].*)/;


/**
 * Create a regex that requires a minimum amount of lowercase characters
 *
 * @param minLowercaseCount - The minimum amount of lowercase characters allowed
 * @return The regex
 */
export function createContainsLowercaseRegex(minLowercaseCount: number): RegExp {
  return new RegExp(`(.*[a-z].*){${minLowercaseCount},}`)
}

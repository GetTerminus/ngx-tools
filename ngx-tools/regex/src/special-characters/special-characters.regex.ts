/**
 * Define a regex to validate a string contains at least one special character
 *
 * Allowed special characters: !, @, #, $, %, ^, &, *, (, ), -, _
 */
export const containsSpecialCharacterRegex = /.*(?:[!@#$%^&*_=+()-].*)/;


/**
 * Create a regex that requires a minimum amount of numbers
 *
 * @example
 * const reg = createContainsSpecialCharacterRegex(2);
 * reg.test('abc1d') // Returns false
 * reg.test('a^bc$d') // Returns true
 *
 * @param minimum - The minimum amount of number characters required
 * @return The regex
 */
export function createContainsSpecialCharacterRegex(minimum: number): RegExp {
  return new RegExp(`.*(?:[!@#$%^&*_=+()-].*){${minimum},}`);
}

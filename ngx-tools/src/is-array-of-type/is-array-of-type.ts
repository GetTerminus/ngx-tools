/**
 * Helper function to determine if all the members of an array are of a given type
 *
 * @param x - array to test for type
 * @param guard - test for specific type
 * @return boolean
 */
// tslint:disable-next-line no-any
export function isArrayOfType<T>(x: any[], guard: (y: any) => y is T): x is T[] {
  for (const value of x) {
    if (!guard(value)) {
      return false;
    }
  }
  return true;
}

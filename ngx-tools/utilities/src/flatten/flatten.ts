/**
 * Define a deep array of generics
 */
export interface DeepArray<T> extends Array<T | DeepArray<T>> {}

/**
 * Define an intersection of a generic and a deep array of generics
 */
export type Deep<T> = T | DeepArray<T>;


/**
 * Flatten a nested array
 *
 * @param arr - The array to flatten
 * @return The flattened array
 *
 * @Example
 * flatten<number>([1, 2, [3, 4]]) // Returns: `[1, 2, 3, 4]`
 */
export function flatten<T = unknown>(arr: Deep<T>): T[] {
  const innerArray: Deep<T> = [];
  return (Array.isArray(arr) ? innerArray.concat(...arr.map(flatten)) : arr) as T[];
}

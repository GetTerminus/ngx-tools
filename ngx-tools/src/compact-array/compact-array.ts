/**
 * Creates an array with `null` & `undefined` values removed.
 *
 * @example
 * compactArray(['hi', null, 2, true, undefined]) // returns: ['hi', 2, true]
 *
 * @param arr - The array to compact
 * @return The compacted array
 */
export function compactArray<T>(arr: (T | null | undefined)[]): T[] | undefined {
  if (!arr || arr.length < 1) {
    return undefined;
  }

  const valuesToReturn: T[] = [];

  arr.map(i => {
    if (i === null || i === undefined || '') {
      return;
    }
    valuesToReturn.push(i);
  });

  return valuesToReturn;
}

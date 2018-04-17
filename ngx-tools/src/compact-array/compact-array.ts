/**
 * Creates an array with `null` & `undefined` values removed.
 *
 * @param arr - The array to compact
 * @return The compacted array
 */
export function compactArray<T>(arr: (T | null | undefined)[]): T[] | undefined {
  if (!arr || arr.length < 1) {
    return;
  }

  const valuesToReturn: T[] = [];

  arr.map((i) => {
    if (i === null || i === undefined || '') {
      return;
    }
    valuesToReturn.push(i);
  });

  return valuesToReturn;
}

/**
 * Helper function to return an array of values from an hash object
 *
 * @param keys The array containing the key values (number|string) to retrieve from the hash
 * @param hash The object to pull values from
 * @return The array of values that match keys
 */
export function returnValuesByKeys<T>(keys: Array<string|number>, hash: {[key: string]: T}): T[] {
  const stringyKeys: string[] = keys.map((id: number | string): string => {
    return id.toString();
  });
  const values: T[] = [];

  for (const key of stringyKeys) {
    // istanbul ignore else
    if (hash[key]) {
      values.push(hash[key]);
    }
  }

  return values;
}

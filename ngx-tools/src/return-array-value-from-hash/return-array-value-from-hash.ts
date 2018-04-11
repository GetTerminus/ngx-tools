/**
 * Helper function to return an array of values from an hash object
 *
 * @param keys The array containing the key values (number|string) to retrieve from the hash
 * @param hash The object to pull values from
 * @return The array of values that match keys
 *
 */
export function returnValuesByKeys<T>(keys: Array<string | number>, hash: { [key: string]: T }): T[] {

  // Convert to strings if provided keys are numbers
  if (typeof keys[0] === 'number') {
    keys.map((id: number): string => {
      return id.toString();
    });
  }

  // Replace each ID with the value of the corresponding hash key
  return keys.map((item: string): T => {
    return hash[item];
  }).filter((x) => x !== undefined);
}

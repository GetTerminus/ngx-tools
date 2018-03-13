/**
 * Determine if an object exists in an array
 *
 * @example
 * const object = {id: 2};
 * const arr = [{id: 1}, {id: 2}, {id: 3}];
 * const comparator = (v) => v.id;
 * arrayContainsObject(object, array, comparator); // returns true
 *
 * @param object - The object to look for in the array
 * @param array - The array to search through
 * @param comparator - The function to determine what object values to compare
 * @return True if a match was found
 */
export function arrayContainsObject(object: {[key: string]: any}, array: any[], comparator: (value: any) => string): boolean {
  let hasDuplicate = false;

  for (let i = 0; i < array.length; i++) {
    if (comparator(array[i]) === comparator(object)) {
      hasDuplicate = true;
      break;
    }
  }

  return hasDuplicate;
}

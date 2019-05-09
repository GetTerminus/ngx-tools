/**
 * Helper function to get an object with deep keys
 *
 * @param obj - The object to modify.
 * @param keys - The path of the property to set.
 * @param value - The value to set.
 * @return The updated object
 */
// tslint:disable-next-line no-any
export function objectDeepSet<ValueType, ObjectType extends object>(obj: any, keys: string, value: ValueType): ObjectType {
  const paths: string[] = keys.split('.');

  if (paths.length === 1) {
    const path = paths[0];

    return ({
      ...obj,
      [path]: value,
    }) as ObjectType;
  }
  const [path, ...remainingPaths] = paths;
  // tslint:disable-next-line no-unsafe-any
  const nestedObj = obj[path];
  const newNestedObj = objectDeepSet(nestedObj, remainingPaths.join('.'), value);

  return ({
    ...obj,
    [path]: newNestedObj,
  }) as ObjectType;
}

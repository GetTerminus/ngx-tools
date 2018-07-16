/**
 * Helper function to parse an object with deep keys
 *
 * @param obj - the object
 * @param path - the object path
 * @return string value at the lowest layer
 */

export function objectDeepParse(object: { [key: string]: any } | string, keys: string | string[], defaultVal = object): any {
  if (typeof object === 'string' || typeof object === 'boolean' || !object) {
    return object;
  }

  keys = Array.isArray(keys) ? keys : keys.split('.');
  object = object[keys[0]];
  if (object && keys.length > 1) {
    return objectDeepParse(object, keys.slice(1), defaultVal);
  }
  return object === undefined ? defaultVal : object;
}

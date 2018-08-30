import { isArray } from './../../verify-types/is-array/is-array';


/**
 * Helper function to parse an object with deep keys
 *
 * @param obj - An object with key as string or string
 * @param keys - A string or array of strings
 * @return String value at the lowest layer or object itself
 */
export function objectDeepParse(object: { [key: string]: any } | string, keys: string | string[]): any {
  if (typeof object === 'string' || typeof object === 'boolean' || !object) {
    return object;
  }

  keys = isArray(keys) ? keys : keys.split('.');
  object = object[keys[0]];

  if (object && keys.length > 1) {
    return objectDeepParse(object, keys.slice(1));
  }

  return object;
}

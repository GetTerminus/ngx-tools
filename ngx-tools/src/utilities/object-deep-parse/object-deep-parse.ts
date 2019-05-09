import { isArray } from './../../verify-types/is-array/is-array';
import { isBoolean } from './../../verify-types/is-boolean/is-boolean';
import { isString } from './../../verify-types/is-string/is-string';


/**
 * Helper function to parse an object with deep keys
 *
 * @example
 * objectDeepParse(myObject, ['foo', 'bar']) // Returns myObject.foo.bar if found
 * objectDeepParse(myObject, 'foo.bar') // Returns myObject.foo.bar if found
 *
 * @param obj - An object with key as string or string
 * @param keys - A string or array of strings
 * @return String value at the lowest layer or object itself
 */
// tslint:disable-next-line no-any
export function objectDeepParse(object: Record<string, any> | string, keys: string | string[]): any {
  if (isString(object) || isBoolean(object) || !object) {
    return object;
  }

  keys = isArray(keys) ? keys : keys.split('.');
  // tslint:disable-next-line no-unsafe-any
  object = object[keys[0]];

  if (object && keys.length > 1) {
    return objectDeepParse(object, keys.slice(1));
  }

  return object;
}

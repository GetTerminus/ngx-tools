import {
  isArray,
  isBoolean,
  isString,
} from '@terminus/ngx-tools/type-guards';


/**
 * Helper function to parse an object with deep keys
 *
 * @param obj - An object with key as string or string
 * @param keys - A string or array of strings
 * @return String value at the lowest layer or object itself
 *
 * @example
 * objectDeepParse(myObject, ['foo', 'bar']) // Returns: myObject.foo.bar if found
 * objectDeepParse(myObject, 'foo.bar')      // Returns: myObject.foo.bar if found
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

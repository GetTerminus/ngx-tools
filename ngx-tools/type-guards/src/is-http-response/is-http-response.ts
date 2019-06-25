import { HttpResponse } from '@angular/common/http';

import { isNull } from './../is-null/is-null';
import { isUndefined } from './../is-undefined/is-undefined';


interface TokenResponse {
  token: string;
}


/**
 * Determine if an item is an HTTP response
 *
 * @param x - The value to check
 * @return The result
 *
 * @example
 * isHttpResponse({headers: {...}})             // Returns: true
 * isHttpResponse<MyResponseType>({foo: 'bar'}) // Returns: false
 */
export function isHttpResponse<T>(x: Object | TokenResponse | HttpResponse<T>): x is HttpResponse<T> {
  return !isNull(x) && !isUndefined(x) && x.hasOwnProperty('headers');
}

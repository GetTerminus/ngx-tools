import { HttpResponse } from '@angular/common/http';

import { isNull } from './../is-null/is-null';
import { isUndefined } from './../is-undefined/is-undefined';


interface TokenResponse {
  token: string;
}


/**
 * Determine if an item is a token response
 *
 * @param x - The item to check
 * @return The result
 *
 * @example
 * isTokenResponse({token: 'any'})               // Returns: true
 * isTokenResponse<MyResponseType>({foo: 'bar'}) // Returns: false
 */
export function isTokenResponse<T>(x: Object | TokenResponse | HttpResponse<T>): x is TokenResponse {
  return !isNull(x) && !isUndefined(x) && x.hasOwnProperty('token');
}

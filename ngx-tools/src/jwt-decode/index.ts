// Rewritten from https://github.com/auth0/jwt-decode/tree/master/lib to be
// typescript compliant
import {  base64_url_decode } from './base64_url_decode';

export class InvalidTokenError {
  constructor(public message: string) { }
}
(InvalidTokenError.prototype as any).name = 'InvalidTokenError';

export function jwtDecode<T>(token: string, options?: {header?: boolean}): T {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  const pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos])) as T;
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
}


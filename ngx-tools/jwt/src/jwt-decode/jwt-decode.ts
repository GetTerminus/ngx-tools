// Rewritten from https://github.com/auth0/jwt-decode/tree/master/lib to be typescript compliant
// eslint-disable-next-line camelcase
import { base64_url_decode } from './base64-url-decode';


export class InvalidTokenError {
  public constructor(public message: string) {}
}

// tslint:disable-next-line no-any
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
    if (e instanceof Error) {
      throw new InvalidTokenError(`Invalid token specified: ${e.message}`);
    } else {
      throw e;
    }
  }
}

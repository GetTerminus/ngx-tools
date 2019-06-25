/* eslint-disable no-magic-numbers */
import { atobPolyfill } from './atob';


const localAtob = window.atob || atobPolyfill;

function b64DecodeUnicode(str: string): string {
  return decodeURIComponent(localAtob(str).replace(/(.)/g, function(m, p: string) {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = `0${code}`;
    }
    return `%${code}`;
  }));
}


// eslint-disable-next-line camelcase
export function base64_url_decode(str: string): string {
  let output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw new Error('Illegal base64url string!');
  }

  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return localAtob(output);
  }
}

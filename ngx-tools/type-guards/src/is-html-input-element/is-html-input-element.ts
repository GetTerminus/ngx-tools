import { isSet } from './../is-set/is-set';


/**
 * Coerce the type to HTMLInputElement
 *
 * @param x - The item to test
 * @return True if the value is a HTMLInputElement
 *
 * @example
 * const myInput = document.querySelector('#myInput');
 * const myDiv = document.querySelector('#myDiv');
 *
 * isHTMLInputElement(myInput); // Returns: true
 * isHTMLInputElement(myDiv);   // Returns: false
 */
// tslint:disable-next-line no-any
export function isHTMLInputElement(x: any): x is HTMLInputElement {
  // tslint:disable-next-line no-unsafe-any
  return !!x && isSet(x.files);
}

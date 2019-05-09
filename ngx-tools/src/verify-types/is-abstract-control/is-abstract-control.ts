import { AbstractControl } from '@angular/forms';

import { isSet } from './../../isSet/isSet';
import { isUnset } from './../../isUnset/isUnset';


/**
 * Coerce the type to AbstractControl
 *
 * @example
 * isAbstractControl(new FormControl()) // returns true
 * isAbstractControl('hi') // returns false
 *
 * @param x - The item to test
 * @return True if the value is a control
 */
// tslint:disable-next-line no-any
export function isAbstractControl(x: any): x is AbstractControl {
  // tslint:disable-next-line no-unsafe-any
  return !isUnset(x) && isSet(x.pristine);
}

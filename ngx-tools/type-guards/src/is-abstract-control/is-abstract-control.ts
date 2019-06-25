import { AbstractControl } from '@angular/forms';


/**
 * Determine if the item is an AbstractControl
 *
 * @param x - The item to test
 * @return The result
 *
 * @example
 * isAbstractControl(new FormControl()) // Returns: true
 * isAbstractControl('hi')              // Returns: false
 */
// tslint:disable-next-line no-any
export function isAbstractControl(x: Record<string, any>): x is AbstractControl {
  return !!x && x.hasOwnProperty('valueChanges');
}

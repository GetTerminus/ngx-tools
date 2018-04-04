import { SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { inputHasChanged } from './../input-has-changed/input-has-changed';


/**
 * Helper function to determine if a specific value has changed
 *
 * @param changes - The object of changes
 * @param key - The object key in question
 * @param control - The formControl
 * @return True if the value has changed
 */
export function updateControlOnInputChanges(
  changes: SimpleChanges,
  key: string,
  control: AbstractControl,
): boolean {
  if (!changes || !key || !control) {
    return false;
  }

  if (inputHasChanged(changes, key)) {
    control.setValue(changes[key].currentValue);
    return true;
  } else {
    return false;
  }
}

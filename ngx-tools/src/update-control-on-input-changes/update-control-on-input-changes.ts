import { SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { inputHasChanged } from './../input-has-changed/input-has-changed';
import { ChangesUtil } from '../utilities/changes-util';


/**
 * Helper function to determine if a specific value has changed
 *
 * @param changes - The object of changes
 * @param control - The formControl
 * @return True if the value has changed
 */
export function updateControlOnInputChanges(
  changes: SimpleChanges,
  path: string,
  control: AbstractControl | null,
): boolean {
  if (!changes || !path || !control) {
    return false;
  }

  if (inputHasChanged(changes, path)) {
    const newValue = ChangesUtil.getNewValue(changes, path);
    control.setValue(newValue);
    return true;
  } else {
    return false;
  }
}


import { SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { inputHasChanged } from './../input-has-changed/input-has-changed';
import { NgChangeObjectValueParser } from '../utilities/ngchange-object-value-parser';


/**
 * Helper function to determine if a specific value has changed
 *
 * @param changes - The object of changes
 * @param path - A string with keys defined, separate with '.'
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
    const newValue = NgChangeObjectValueParser.getNewValue(changes, path);
    control.setValue(newValue);
    return true;
  } else {
    return false;
  }
}


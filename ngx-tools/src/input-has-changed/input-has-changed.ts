import { SimpleChanges } from '@angular/core';

import { NgChangeObjectValueParser } from './../utilities/ngchange-object-value-parser/ngchange-object-value-parser';


/**
 * Helper function to determine if a specific value has changed
 *
 * @param changes - The object of changes
 * @param path - The object path in question
 * @return True if the value has changed
 */
export function inputHasChanged(changes: SimpleChanges, path: string): boolean | undefined {
  if (!changes || !path) {
    return;
  }

  const oldValue = NgChangeObjectValueParser.getOldValue(changes, path);
  const newValue = NgChangeObjectValueParser.getNewValue(changes, path);

  if (oldValue !== newValue) {
    return true;
  } else {
    return false;
  }
}

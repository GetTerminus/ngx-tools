import {
  FormGroup,
  AbstractControl,
} from '@angular/forms';

import { controlHasRequiredField } from './../control-has-required-field/control-has-required-field';


/**
 * Determine if a form group contains any required controls
 *
 * @param group - The form group to check
 * @return If the any nested control is required
 */
export function formGroupHasRequiredControl(group: FormGroup): boolean {
  if (!group || !Object.keys(group.controls).length) {
    return;
  }
  let isRequired = false;

  for (let i = 0; i < Object.keys(group.controls).length; i += 1) {
    const control: AbstractControl = group.controls[Object.keys(group.controls)[i]];
    console.log('control: ', control)
    isRequired = controlHasRequiredField(control);

    if (isRequired) {
      break;
    }
  }

  return isRequired;
}

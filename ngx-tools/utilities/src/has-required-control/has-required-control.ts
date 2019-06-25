import {
  AbstractControl,
  FormGroup,
} from '@angular/forms';


/**
 * Determine if a form control has a required validator
 *
 * @param formItem - The control or form group to check
 * @return If a required control is found
 *
 * @example
 * const ctrl = new FormControl(null, [Validators.required];
 * const group = new FormGroup({myControl: [null, [Validators.required]]});
 * hasRequiredControl(ctrl);  // Returns: true
 * hasRequiredControl(group); // Returns: true
 */
export function hasRequiredControl(formItem: AbstractControl): boolean {
  if (!formItem) {
    return false;
  }

  // Dealing with FormGroup
  if (formItem instanceof FormGroup) {
    let isRequired = false;

    // Check each control within the group
    for (let i = 0; i < Object.keys(formItem.controls).length; i += 1) {
      const control: AbstractControl = formItem.controls[Object.keys(formItem.controls)[i]];
      isRequired = controlHasRequiredField(control);

      // Break out of the loop when we find the first required control
      if (isRequired) {
        break;
      }
    }

    return isRequired;
  }
  // Dealing with AbstractControl
  return controlHasRequiredField(formItem);

}



/**
 * Determine if a form control has a required validator
 *
 * @param control - The control to test
 * @return If the control is required
 *
 * @example
 * const ctrl = new FormControl(null, [Validators.required];
 * controlHasRequiredField(ctrl); // Returns: true
 */
function controlHasRequiredField(control: AbstractControl): boolean {
  const validator = control.validator ? control.validator({} as AbstractControl) : null;

  if (validator && validator.required) {
    return true;
  }
  return false;

}

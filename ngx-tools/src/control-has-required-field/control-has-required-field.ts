import { AbstractControl } from '@angular/forms';


/**
 * Determine if a form control has a required validator
 *
 * @example
 * const ctrl = new FormControl(null, [Validators.required];
 * controlHasRequiredField(ctrl); // returns true
 *
 * @param control - The control to check
 * @return If the control is required
 */
export function controlHasRequiredField(control: AbstractControl): boolean {
  if (control && control.validator) {
    const validator = control.validator({} as AbstractControl);

    if (validator && validator.required) {
      return true;
    }
  }

  return false;
};

import {
  AbstractControl,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { isSet } from './../isSet/isSet';
import { isAbstractControl } from './../verify-types/is-abstract-control/is-abstract-control';


/**
 * Return the value of a FormControl within a FormGroup
 *
 * @example
 * getFormControlValue(myFormGroup, 'myControl');
 * getFormControlValue<boolean>(myFormGroup, 'myControl');
 *
 * @param form - The FormGroup that contains the control
 * @param controlName - The name of the control
 * @return The value
 */
export function getFormControlValue<T>(form: FormGroup, controlName: string): T | undefined {
  if (!form || !controlName) {
    return undefined;
  }

  const control = form.get(controlName);

  return isAbstractControl(control) ? control.value as T : undefined;
}

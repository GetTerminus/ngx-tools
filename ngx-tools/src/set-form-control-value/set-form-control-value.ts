import { FormGroup } from '@angular/forms';


/**
 * Set the value of a FormControl
 *
 * @param form - The FormGroup
 * @param controlName - The name of the control
 * @param controlValue - The value to set the control to
 */
// tslint:disable-next-line no-any
export function setFormControlValue(form: FormGroup, controlName: string, controlValue: any): void {
  if (!form || !controlName) {
    return;
  }

  const control = form.get(controlName);

  if (control) {
    control.setValue(controlValue);
  }
}

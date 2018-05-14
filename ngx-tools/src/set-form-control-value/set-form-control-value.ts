import { FormGroup } from '@angular/forms';


export function setFormControlValue(form: FormGroup, controlName: string, controlValue: any): any {
  if (!form || !controlName) {
    return;
  }

  const control = form.get(controlName);

  if (control) {
    control.setValue(controlValue);
  }
}

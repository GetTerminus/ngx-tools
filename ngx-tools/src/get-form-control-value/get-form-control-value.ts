import { FormGroup } from '@angular/forms';


export function getFormControlValue(form: FormGroup, controlName: string): any {
  if (!form || !controlName) {
    return;
  }

  return form.get(controlName) ? form.get(controlName).value : null;
}

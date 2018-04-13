import { FormGroup } from '@angular/forms';


export function getFormControlValue(form: FormGroup, controlName: string): any {
  if (!form || !controlName) {
    return;
  }

  const control = form.get(controlName);

  return control ? control.value : null;
}

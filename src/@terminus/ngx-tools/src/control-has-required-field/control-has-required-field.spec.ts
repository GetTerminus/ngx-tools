import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { controlHasRequiredField } from './control-has-required-field';


describe(`controlHasRequiredField`, () => {
  let formBuilder: FormBuilder;
  let myForm: FormGroup;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    myForm = formBuilder.group({
      first: [
        null,
      ],
      second: [
        null,
        [
          Validators.required,
        ],
      ],
    });
  });


  test(`should return true if the form control has a required validator`, () => {
    const actual = controlHasRequiredField(myForm.get('second'));

    expect(actual).toEqual(true);
  });


  test(`should return false if the form control has no required validator`, () => {
    const actual = controlHasRequiredField(myForm.get('first'));

    expect(actual).toEqual(false);
  });

});

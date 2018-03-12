import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { formGroupHasRequiredControl } from './form-group-has-required-field';


describe(`formGroupHasRequiredControl`, () => {
  let formBuilder: FormBuilder;
  let myForm: FormGroup;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    myForm = formBuilder.group({
      first: formBuilder.group({
        firstA: [
          null,
        ],
        firstB: [
          null,
          [
            Validators.required,
          ],
        ],
      }),
      second: formBuilder.group({
        secondA: [
          null,
        ],
        secondB: [
          null,
        ],
      }),
      third: formBuilder.group({
      }),
    });
  });


  test(`should return false if no form group was passed in`, () => {
    const actual = formGroupHasRequiredControl(undefined);

    expect(actual).toEqual(false);
  });


  test(`should return true if the form group has a control with a required validator`, () => {
    const actual = formGroupHasRequiredControl(myForm.get('first'));

    expect(actual).toEqual(true);
  });


  test(`should return false if no nested controls are required`, () => {
    const actual = formGroupHasRequiredControl(myForm.get('second'));

    expect(actual).toEqual(false);
  });


  test(`should return false if an empty form group was passed in`, () => {
    const actual = formGroupHasRequiredControl(myForm.get('third'));

    expect(actual).toEqual(false);
  });

});

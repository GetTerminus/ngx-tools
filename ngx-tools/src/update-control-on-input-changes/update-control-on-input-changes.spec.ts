import {
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { updateControlOnInputChanges } from './update-control-on-input-changes';

describe(`updateControlOnInputChanges`, () => {
  const changed = {
    item1: new SimpleChange(undefined, true, true),
    item2: new SimpleChange('foo', 'foo', false),
  } as SimpleChanges;
  const control: FormControl = new FormControl();


  test(`should return false if the changes object or key are missing`, () => {
    expect(updateControlOnInputChanges(null, 'foo', control)).toEqual(false);
  });


  test(`should return true if the value has changed`, () => {
    expect(updateControlOnInputChanges(changed, 'item1', control)).toEqual(true);
    expect(updateControlOnInputChanges(changed, 'item2', control)).toEqual(false);
  });

  test(`should set the control value to latest value`, () => {
    updateControlOnInputChanges(changed, 'item1', control);
    expect(control.value).toEqual(changed.item1.currentValue);
  })

});

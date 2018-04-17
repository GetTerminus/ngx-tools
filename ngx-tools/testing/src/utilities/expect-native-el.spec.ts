import {
  TestBed,
  async,
} from '@angular/core/testing';
import {
  Component,
} from '@angular/core';

import { expectNativeEl } from './expect-native-el';


@Component({
  template: `
    <div class="foo"></div>
  `,
})
class TestComponent {}


describe(`expectNativeEl`, () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
      ],
    }).compileComponents();
  }));


  test(`should return a DebugElement`, () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    expectNativeEl(fixture).toBeTruthy();
  });

});

import { ElementRef } from '@angular/core';


/**
 * A mock of the Angular ElementRef class
 */
export class ElementRefMock implements ElementRef {
  nativeElement = {
    innerText: 'foo',
    style: {},
  };
}

import { ElementRef } from '@angular/core';


/**
 * Default stubbed items for `nativeElement`
 */
const defaults = {
  innerText: 'foo',
  style: {},
};


/**
 * A mock of the Angular ElementRef class
 */
export class ElementRefMock implements ElementRef {
  public nativeElement: any;

  constructor(nativeElementAdditions?: {[key: string]: any}) {
    this.nativeElement = Object.assign({}, defaults, nativeElementAdditions || {});
  }
}

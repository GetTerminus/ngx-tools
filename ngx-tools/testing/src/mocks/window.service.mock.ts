import { Injectable } from '@angular/core';
import { noop } from '@terminus/ngx-tools/utilities';


const windowMock: Window = {
  getComputedStyle: () => ({getPropertyValue: () => 'static'}),
  open: noop,
  location: {
    href: 'foo/bar',
    protocol: 'https:',
  },
  alert: noop,
  getSelection: () => ({
    removeAllRanges: noop,
    addRange: noop,
  }),
  scrollTo: (x: number, y: number) => {
  },
  prompt: noop,
  // NOTE: mocking setTimeout/clearTimeout here makes it very hard to test items that use setTimeout. It seems to be easier to add those
  // spies as needed.
  // NOTE: Casting to any allows us to partially mock items.
  // tslint:disable-next-line no-any
} as any;


/**
 * A mock of the TsWindowService
 *
 * @deprecated Please import from `@terminus/ngx-tools/browser`
 */
@Injectable()
export class TsWindowServiceMock {

  public get nativeWindow(): Window {
    return windowMock;
  }

}

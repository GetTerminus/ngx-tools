// tslint:disable: no-any
import { Injectable } from '@angular/core';

// TODO: Replace with ngx-tools import once https://github.com/GetTerminus/ngx-tools/issues/281 has landed
const noop = () => {};

const windowMock: Window = {
  getComputedStyle: () => ({
    getPropertyValue: () => 'static',
  }),
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
  // Note: mocking setTimeout/clearTimeout here makes it very hard to test items that use setTimeout. It seems to be easier to add these two
  // spies as needed.
  // NOTE: Casting to any allows us to partially mock items.
} as any;


@Injectable()
export class TsWindowServiceMock {

  public get nativeWindow(): Window {
    return windowMock;
  }

}

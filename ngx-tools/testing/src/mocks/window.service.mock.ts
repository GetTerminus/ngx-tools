import { Injectable } from '@angular/core';

// TODO: Replace with ngx-tools import once https://github.com/dherges/ng-packagr/pull/685 has
// landed.
const noop = () => {};


const windowMock: Window = {
  getComputedStyle: () => {
    return {
      getPropertyValue: () => 'static',
    }
  },
  open: noop,
  location: {
    href: 'foo/bar',
  },
  alert: noop,
  getSelection: () => {
    return {
      removeAllRanges: noop,
      addRange: noop,
    }
  },
  prompt: noop,
  // Note: mocking setTimeout/clearTimeout here makes it very hard to test items that use
  // setTimeout. It seems to be easier to add these two spies as needed.
} as any;


@Injectable()
export class TsWindowServiceMock {

  get nativeWindow(): Window {
    return windowMock;
  }

}

import { Injectable } from '@angular/core';

// TODO: Replace with ngx-tools import once https://github.com/dherges/ng-packagr/pull/685 has
// landed.
const noop = () => {};


@Injectable()
export class TsDocumentServiceMock {

  public document = {
    body: {
      createTextRange: noop,
      appendChild: noop,
    },
    createRange: () => {
      return {
        selectNodeContents: noop,
      };
    },
    execCommand: noop,
    createElement: noop,
  };

}

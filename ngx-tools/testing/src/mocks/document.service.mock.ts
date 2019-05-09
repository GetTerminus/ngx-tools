import { Injectable } from '@angular/core';

// TODO: Replace with ngx-tools import once https://github.com/GetTerminus/ngx-tools/issues/281 has landed
const noop = () => {};


@Injectable()
export class TsDocumentServiceMock {

  public document = {
    body: {
      createTextRange: noop,
      appendChild: noop,
    },
    createRange: () => ({
      selectNodeContents: noop,
    }),
    execCommand: noop,
    createElement: noop,
  };

}

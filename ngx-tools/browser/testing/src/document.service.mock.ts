import { Injectable } from '@angular/core';
import { noop } from '@terminus/ngx-tools/utilities';


@Injectable()
export class TsDocumentServiceMock {
  public document = {
    body: {
      createTextRange: noop,
      appendChild: noop,
    },
    createRange: () => ({selectNodeContents: noop}),
    execCommand: noop,
    createElement: noop,
  };
}

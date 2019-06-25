import { Injectable } from '@angular/core';
import { noop } from '@terminus/ngx-tools/utilities';


/**
 * A mock of the TsDocumentService
 *
 * @deprecated Please import from `@terminus/ngx-tools/browser`
 */
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

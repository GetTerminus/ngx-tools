import { Injectable } from '@angular/core';
import { noop } from './../../../src/noop/noop';


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
      }
    },
    execCommand: noop,
    createElement: noop,
  };

}

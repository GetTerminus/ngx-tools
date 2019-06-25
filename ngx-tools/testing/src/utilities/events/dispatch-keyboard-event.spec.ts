import { KEYS } from '@terminus/ngx-tools/keycodes';

import { dispatchKeyboardEvent } from './dispatch-keyboard-event';


describe(`dispatchKeyboardEvent`, function() {
  let nodeMock: Element;

  beforeEach(() => {
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });


  test(`should do something`, () => {
    dispatchKeyboardEvent(nodeMock, 'keydown', KEYS.A);

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });

});

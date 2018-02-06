import {
  dispatchEvent,
  /*
   *dispatchFakeEvent,
   *dispatchKeyboardEvent,
   *dispatchMouseEvent,
   *dispatchTouchEvent,
   */
} from './dispatch-events';
import {
  createFakeEvent,
} from './event-objects';
import { createNodeMock } from './create-node-mock';
/*
 *import * as KEYCODES from '@terminus/ngx-tools/keycodes';
 */


describe.only(`dispatchEvent`, () => {

  test(`should trigger the dispatch and return the event`, () => {
    const nodeMock = createNodeMock('div', createNodeMock('html', undefined));
    nodeMock.dispatchEvent = jest.fn().mockName('dispatchEvent');
    const eventMock = createFakeEvent('keydown');

    const actual = dispatchEvent(window, eventMock);

    expect(actual).toEqual(eventMock);
  });

});

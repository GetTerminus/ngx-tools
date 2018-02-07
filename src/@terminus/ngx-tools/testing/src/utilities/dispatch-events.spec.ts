import {
  dispatchEvent,
  dispatchFakeEvent,
  /*
   *dispatchKeyboardEvent,
   */
  dispatchMouseEvent,
  dispatchTouchEvent,
} from './dispatch-events';
import {
  createFakeEvent,
} from './event-objects';
/*
 *import * as KEYCODES from './../../../keycodes/src/public-api';
 */


describe(`dispatch-events`, () => {
  let eventMock;
  let nodeMock;

  beforeEach(() => {
    eventMock = createFakeEvent('keydown');
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });

  afterEach(() => {
    nodeMock.dispatchEvent.mockClear();
  });


  describe(`dispatchEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      const actual = dispatchEvent(nodeMock, eventMock);

      expect(actual).toEqual(eventMock);
      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


  describe(`dispatchFakeEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      const actual = dispatchFakeEvent(nodeMock, eventMock);

      expect(actual).toEqual(eventMock);
      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


  // TODO: this test is causing Jest to hang
/*
 *  describe.only(`dispatchKeyboardEvent`, () => {
 *
 *    test(`should do something`, () => {
 *      const actual = dispatchKeyboardEvent(nodeMock, 'keydown', KEYCODES.A);
 *
 *      expect(actual).toEqual(eventMock);
 *      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
 *    });
 *
 *  });
 */


  describe(`dispatchMouseEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      const actual = dispatchMouseEvent(nodeMock, 'mousedown', 10, 10);

      expect(actual).toEqual(eventMock);
      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


  describe(`dispatchTouchEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      const actual = dispatchTouchEvent(nodeMock, 'touchstart');

      expect(actual).toEqual(eventMock);
      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


});

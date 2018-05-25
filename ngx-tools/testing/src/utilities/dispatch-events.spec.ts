import {
  dispatchEvent,
  dispatchFakeEvent,
  dispatchKeyboardEvent,
  dispatchMouseEvent,
  dispatchTouchEvent,
} from './dispatch-events';
import {
  createFakeEvent,
  createMouseEvent,
} from './event-objects';
import * as KEYCODES from './../../../keycodes/public-api';


describe(`dispatch-events`, () => {
  let nodeMock: Element;

  beforeEach(() => {
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });


  describe(`dispatchEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      const eventMock = createFakeEvent('keydown');
      dispatchEvent(nodeMock, eventMock);

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });


    test(`should trigger the dispatch and return the event for bubbled events`, () => {
      const eventMockBubble = createFakeEvent('keydown', true, true);
      dispatchEvent(nodeMock, eventMockBubble);

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });


  });


  describe(`dispatchFakeEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      dispatchFakeEvent(nodeMock, 'keydown');

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });

  });


  describe(`dispatchKeyboardEvent`, () => {

    test(`should do something`, () => {
      dispatchKeyboardEvent(nodeMock, 'keydown', KEYCODES.A);

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });

  });


  describe(`dispatchMouseEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      dispatchMouseEvent(nodeMock, 'mousedown');

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });


    test(`should trigger the dispatch and return a custom event with custom locations`, () => {
      dispatchMouseEvent(nodeMock, 'mousedown', 10, 10, createMouseEvent('click'));

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });

  });


  describe(`dispatchTouchEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      dispatchTouchEvent(nodeMock, 'touchstart');

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });


    test(`should trigger the dispatch and return the event with custom locations`, () => {
      dispatchTouchEvent(nodeMock, 'touchstart', 10, 10);

      expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
    });

  });


});

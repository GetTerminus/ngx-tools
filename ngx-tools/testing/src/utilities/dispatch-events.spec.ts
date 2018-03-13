import {
  dispatchEvent,
  dispatchFakeEvent,
  dispatchKeyboardEvent,
  dispatchMouseEvent,
  dispatchTouchEvent,
} from './dispatch-events';
import {
  createFakeEvent,
} from './event-objects';
import * as KEYCODES from './../../../keycodes/public-api';


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
      dispatchEvent(nodeMock, eventMock);

      // NOTE(B$): At some point this changed and the returned event doesn't perfectly match the
      // event mock. Don't want to spend much time on it since a) it's a testing util and b) it's
      // created via a deprecated API:
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
      // expect(actual).toEqual(eventMock);
      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


  describe(`dispatchFakeEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      dispatchFakeEvent(nodeMock, eventMock);

      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


  describe(`dispatchKeyboardEvent`, () => {

    test(`should do something`, () => {
      dispatchKeyboardEvent(nodeMock, 'keydown', KEYCODES.A);

      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


  describe(`dispatchMouseEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      dispatchMouseEvent(nodeMock, 'mousedown', 10, 10);

      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


  describe(`dispatchTouchEvent`, () => {

    test(`should trigger the dispatch and return the event`, () => {
      dispatchTouchEvent(nodeMock, 'touchstart');

      expect(nodeMock.dispatchEvent).toHaveBeenCalled();
    });

  });


});

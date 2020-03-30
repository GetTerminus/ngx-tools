import { dispatchFakeEvent } from './dispatch-fake-event';

describe(`dispatchFakeEvent`, function() {
  let nodeMock: Element;

  beforeEach(() => {
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });

  test(`should trigger the dispatch and return the event`, () => {
    dispatchFakeEvent(nodeMock, 'keydown');

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });
});

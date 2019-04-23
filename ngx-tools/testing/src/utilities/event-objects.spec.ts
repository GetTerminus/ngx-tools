import { KEYS } from './../../../keycodes/public-api';
import {
  createMouseEvent,
  createTouchEvent,
  createKeyboardEvent,
} from './event-objects';


describe(`event-objects`, () => {

  describe(`createMouseEvent`, () => {

    test(`should create event at default x/y coords`, () => {
      const actual: MouseEvent = createMouseEvent('click');
      expect(actual.clientX).toEqual(0);
      expect(actual.clientY).toEqual(0);
    });

    test(`should create event at specific x/y coords`, () => {
      const actual: MouseEvent = createMouseEvent('click', 100, 100);
      expect(actual.clientX).toEqual(100);
      expect(actual.clientY).toEqual(100);
    });

  });


  describe(`createTouchEvent`, () => {

    test(`should create event at default x/y coords`, () => {
      const actual: UIEvent = createTouchEvent('click');
      expect((actual as any).touches[0].pageX).toEqual(0);
      expect((actual as any).touches[0].pageY).toEqual(0);
    });

    test(`should create event at specific x/y coords`, () => {
      const actual: UIEvent = createTouchEvent('click', 100, 100);
      expect((actual as any).touches[0].pageX).toEqual(100);
      expect((actual as any).touches[0].pageY).toEqual(100);
    });

  });


  describe(`createKeyboardEvent`, () => {

    test(`should add getters to event`, () => {
      const target: Element = window.document.createElement('div');
      const actual: KeyboardEvent = createKeyboardEvent('keydown', KEYS.ENTER, target);
      expect(actual.code).toEqual(KEYS.ENTER.code);
      expect(actual.key).toEqual(KEYS.ENTER.code);
      expect(actual.keyCode).toEqual(KEYS.ENTER.keyCode);
      expect(actual.target).toEqual(target);
    });


    test(`should add helper for preventDefault`, () => {
      const actual: KeyboardEvent = createKeyboardEvent('keydown', KEYS.ENTER);
      actual.preventDefault();
      expect(actual.defaultPrevented).toEqual(true);
    });

  });

});

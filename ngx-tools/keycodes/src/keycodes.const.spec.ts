import {
  UP_ARROW,
  DOWN_ARROW,
  RIGHT_ARROW,
  LEFT_ARROW,
  PAGE_UP,
  PAGE_DOWN,
  HOME,
  END,
  ENTER,
  SPACE,
  TAB,
  ESCAPE,
  BACKSPACE,
  DELETE,
  A,
  Z,
  ZERO,
  NINE,
  COMMA,
} from './keycodes.const';


describe(`keycodes`, () => {
  const codes: number[] = [
    UP_ARROW,
    DOWN_ARROW,
    RIGHT_ARROW,
    LEFT_ARROW,
    PAGE_UP,
    PAGE_DOWN,
    HOME,
    END,
    ENTER,
    SPACE,
    TAB,
    ESCAPE,
    BACKSPACE,
    DELETE,
    A,
    Z,
    ZERO,
    NINE,
    COMMA,
  ];


  test(`should all be valid numbers`, () => {
    for (const code in codes) {
      if (codes[code]) {
        expect(codes[code]).toEqual(expect.any(Number));
      }
    }
  });

});

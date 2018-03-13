import * as KEYCODES from './keycodes.const';

describe(`keycodes`, () => {

  test(`should all be valid numbers`, () => {
    for (const code in KEYCODES) {
      if (KEYCODES[code]) {
        expect(KEYCODES[code]).toBeGreaterThanOrEqual(0);
      }
    }
  });

});

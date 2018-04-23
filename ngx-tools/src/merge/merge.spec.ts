import { merge } from './merge';


describe(`merge`, () => {
  const foo = {
    item1: 'foo1',
    obj: {
      item2: 'foo2',
    },
  };
  const bar = {
    item1: 'BARRRR',
    item3: 'bar1',
    obj: {
      item4: 'bar2',
    },
  };
  const expected = {
    item1: 'BARRRR',
    item3: 'bar1',
    obj: {
      item2: 'foo2',
      item4: 'bar2',
    },
  };


  test(`should merge multiple objects`, () => {
    expect(merge([foo, bar])).toEqual(expected);
  });

});

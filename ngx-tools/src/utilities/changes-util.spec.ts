import { SimpleChanges, SimpleChange } from '@angular/core';
import { ChangesUtil } from './changes-util';

describe(`ChangesUtil`, () => {

  const changed = {
    item1: new SimpleChange('foo', 'bar', false),
    item2: new SimpleChange({ foo: { bar: { baz: 'xyz' } } }, { foo: { bar: { baz: 'abc' } } }, false),
  } as SimpleChanges;

  describe(`getOldValue`, () => {

    test(`should return old value`, () => {
      expect(ChangesUtil.getOldValue(changed, 'item1')).toEqual('foo');
      expect(ChangesUtil.getOldValue(changed, 'item2.foo.bar.baz')).toEqual('xyz');
    });

    test(`should return original object if no path passed in`, () => {
      expect(ChangesUtil.getOldValue(changed, '')).toEqual(changed);
    });

  });

  describe(`getNewValue`, () => {

    test(`should return new value`, () => {
      expect(ChangesUtil.getNewValue(changed, 'item1')).toEqual('bar');
      expect(ChangesUtil.getNewValue(changed, 'item2.foo.bar.baz')).toEqual('abc');
    });

    test(`should return original object if no path passed in`, () => {
      expect(ChangesUtil.getOldValue(changed, '')).toEqual(changed);
    });

  });

  describe(`parsePath`, () => {

    test(`should return parsed value`, () => {
      expect(ChangesUtil.parsePath('foo.bar')).toEqual([['bar'], 'foo']);
    });

    test(`should return array containing undefined if empty string passed in`, () => {
      expect(ChangesUtil.parsePath('')).toEqual([[], undefined]);
    });
  });

});

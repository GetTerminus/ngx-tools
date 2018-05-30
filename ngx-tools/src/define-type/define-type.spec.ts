import { resetTypeCache, defineType } from './define-type';

describe('defineType', () => {
  beforeEach(() => { resetTypeCache(); });

  it('returns the passed value', () => {
    expect(defineType('foo')).toEqual('foo');
  });

  it('throws an error when called twice', () => {
    defineType('bar');
    expect(() => defineType('bar')).toThrowError();
  });
});


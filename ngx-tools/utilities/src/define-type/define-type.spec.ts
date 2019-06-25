import {
  defineType,
  resetTypeCache,
} from './define-type';


describe(`defineType`, function() {

  beforeEach(() => {
    resetTypeCache();
  });


  test(`returns the passed value`, () => {
    expect(defineType('foo')).toEqual('foo');
  });


  test(`throws an error when called twice`, () => {
    defineType('bar');
    expect(() => defineType('bar')).toThrowError();
  });

});

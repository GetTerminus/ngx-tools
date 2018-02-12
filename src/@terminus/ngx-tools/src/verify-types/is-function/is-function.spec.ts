import { isFunction } from './is-function';


describe(`isFunction`, () => {
  const func1 = () => true;
  const func2 = function() {return true};

  const nonFunc1 = 'foo';
  const nonFunc2 = 1;
  const nonFunc3 = [1, 2];
  const nonFunc4 = {};
  const nonFunc5 = null;
  const nonFunc6 = undefined;


  test(`should return true for functions`, () => {
    expect(isFunction(func1)).toEqual(true);
    expect(isFunction(func2)).toEqual(true);
  });


  test(`should return false for non-functions`, () => {
    expect(isFunction(nonFunc1)).toEqual(false);
    expect(isFunction(nonFunc2)).toEqual(false);
    expect(isFunction(nonFunc3)).toEqual(false);
    expect(isFunction(nonFunc4)).toEqual(false);
    expect(isFunction(nonFunc5)).toEqual(false);
    expect(isFunction(nonFunc6)).toEqual(false);
  });

});

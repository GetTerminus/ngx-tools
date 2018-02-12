import { isObject } from './is-object';


describe(`isObject`, () => {
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  const obj1 = {};
  const obj2 = new Object();
  const obj3 = new Car('Eagle', 'Talon TSi', 1993);
  const obj4 = Object.create({});

  const nonObj1 = 'foo';
  const nonObj2 = true;
  const nonObj3 = [];
  const nonObj4 = 'foo';
  const nonObj5 = null;
  const nonObj6 = undefined;


  test(`should return true for objects`, () => {
    expect(isObject(obj1)).toEqual(true);
    expect(isObject(obj2)).toEqual(true);
    expect(isObject(obj3)).toEqual(true);
    expect(isObject(obj4)).toEqual(true);
  });


  test(`should return false for non-objects`, () => {
    expect(isObject(nonObj1)).toEqual(false);
    expect(isObject(nonObj2)).toEqual(false);
    expect(isObject(nonObj3)).toEqual(false);
    expect(isObject(nonObj4)).toEqual(false);
    expect(isObject(nonObj5)).toEqual(false);
    expect(isObject(nonObj6)).toEqual(false);
  });

});

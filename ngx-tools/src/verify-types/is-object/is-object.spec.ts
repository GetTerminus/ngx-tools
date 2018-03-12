import { isObject } from './is-object';


describe(`isObject`, () => {
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const validObjects: any[] = [
    {},
    new Object(),
    new Car('Eagle', 'Talon TSi', 1993),
    Object.create({}),
  ];
  const invalidObjects: any[] = [
    'foo',
    true,
    [],
    null,
    undefined,
  ];


  test(`should return true for objects`, () => {
    for (const test of validObjects) {
      expect(isObject(test)).toEqual(true);
    }
  });


  test(`should return false for non-objects`, () => {
    for (const test of invalidObjects) {
      expect(isObject(test)).toEqual(false);
    }
  });

});

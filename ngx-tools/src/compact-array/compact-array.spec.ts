import { compactArray } from './compact-array';


describe(`compactArray`, () => {

  test(`should return undefined if the array is empty or doesn't exist`, () => {
    expect(compactArray(null)).toEqual(undefined);
    expect(compactArray([])).toEqual(undefined);
  });


  test(`should return the cleaned array`, () => {
    const arr1: string[] = ['foo', null, 'bar', undefined, 'baz'];
    expect(compactArray<string>(arr1)).toEqual(['foo', 'bar', 'baz']);
  });

});

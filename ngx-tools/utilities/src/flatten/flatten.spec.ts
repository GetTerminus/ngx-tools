import { flatten } from './flatten';


describe(`flatten`, () => {
  const flatArray = [1, 2, 3, 4];

  test(`should return a non-nested array`, () => {
    expect(flatten<number>(flatArray)).toEqual(flatArray);
  });

  test(`should flatten a nested array`, () => {
    const arr = [1, 2, [3, 4]];
    expect(flatten<number>(arr)).toEqual(flatArray);
  });

  test(`should flatten a deeply nested array`, () => {
    const arr = ['foo', ['bar', ['baz', ['bing']]]];
    expect(flatten<string>(arr)).toEqual(['foo', 'bar', 'baz', 'bing']);
  });

});

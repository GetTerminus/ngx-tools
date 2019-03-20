/**
 * A type that allows consumer to extend a class with private properties
 * @type T - the Class with private properties
 */
export type publicShapeOf<T> = {
  [P in keyof T]: T[P];
};

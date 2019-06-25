/**
 * A helper function to apply TypeScript mixins
 *
 * https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param drivedCtor - The mixin target class
 * @param baseCtors - An array of classes to combine into the target class
 * @return The mixed class
 *
 * @example
 * applyMixins(SmartObject, [Disposable, Activatable]);
 */
// tslint:disable-next-line no-any
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    // tslint:disable no-unsafe-any
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

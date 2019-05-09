// tslint:disable: no-any
/**
 * Coerces a data-bound value (typically a string) to a number.
 */
export function coerceNumberProperty(value: any): number;
export function coerceNumberProperty<D>(value: any, fallback: D): number | D;
export function coerceNumberProperty(value: any, fallbackValue = 0) {
  return isNumberValue(value) ? Number(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
export function isNumberValue(value: any): boolean {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  // NOTE: TypeScript seems to consider `parseFloat(value)` unsafe. In my tests there are no values which `pareFloat` cannot handle safely.
  // tslint:disable-next-line no-unsafe-any
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

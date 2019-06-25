// tslint:disable: no-any
/**
 * Coerces a data-bound value (typically a string) to a date.
 *
 * @param value - The value to coerce to a Date
 * @param fallbackValue - The value to fall back to if the passed in value is not a valid date
 * @return A Date object
 *
 * @example
 * coerceDateProperty('Wed, 21 Oct 2015 07:28:00 GMT'); // Returns: Date object
 * // Also supports a custom fallback value:
 * coerceDateProperty<boolean>('foo', false);           // Returns: false
 */
export function coerceDateProperty(value: any): Date;
export function coerceDateProperty<D>(value: any, fallbackValue: D): Date | D;
export function coerceDateProperty(value: any, fallbackValue: any = new Date()) {
  return isDateValue(value) ? new Date(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a date.
 * @docs-private
 */
export function isDateValue(value: any): value is Date {
  // tslint:disable-next-line no-unsafe-any
  return !isNaN(Date.parse(value));
}


/**
 * Coerces a data-bound value (typically a string) to a date.
 */
export function coerceDateProperty(value: any): Date;
export function coerceDateProperty<D>(value: any, fallbackValue: D): Date | D;
export function coerceDateProperty(value: any, fallbackValue: any = new Date()) {
  return _isDateValue(value) ? new Date(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a date.
 * @docs-private
 */
export function _isDateValue(value: any): boolean {
  return !isNaN(Date.parse(value));
}

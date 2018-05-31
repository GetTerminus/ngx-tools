
/**
 * Coerces a data-bound value (typically a string) to a date.
 */
export function coerceDateProperty(value: any): Date;
export function coerceDateProperty<D>(value: any, fallback: D): Date | D;
export function coerceDateProperty(value: any, fallbackValue = 0) {
  return _isDateValue(value) ? new Date(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a date.
 * @docs-private
 */
export function _isDateValue(value: any): boolean {
  return !isNaN(Date.parse(value));
}

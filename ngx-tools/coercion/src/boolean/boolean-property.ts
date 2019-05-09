/**
 * Coerces a data-bound value (typically a string) to a boolean.
 *
 * @param value - The value to coerce to a boolean
 * @return The boolean
 */
// tslint:disable-next-line no-any
export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

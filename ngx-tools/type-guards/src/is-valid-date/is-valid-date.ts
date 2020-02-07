import { isValid } from 'date-fns';
/**
 * Determine if an item is a valid date
 *
 *
 * @param x - The item to test
 * @return The result
 *
 * @example
 * isValidDate('foo'); // Returns: false
 * isValidDate('2020-02-07');    // Returns: true
 */
export function isValidDate(value: string | Date): boolean {
  const date: Date = (typeof value === 'string') ? new Date(value) : value;
  return isValid(date);
}

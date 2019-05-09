import { isArray } from '../index';
import { isNull } from './../../isNull/isNull';

export function arrayHasAllElementsSet<A>(arr: [A | undefined | null]): arr is [A];
export function arrayHasAllElementsSet<A, B>(arr: [A | undefined | null, B | undefined | null]): arr is [A, B];
export function arrayHasAllElementsSet<A, B, C>(arr: [A | undefined | null, B | undefined | null, C | undefined | null]): arr is [A, B, C];
export function arrayHasAllElementsSet<A, B, C, D>(
  arr: [A | undefined | null, B | undefined | null, C | undefined | null, D | undefined | null],
): arr is [A, B, C, D];
// tslint:disable-next-line no-any
export function arrayHasAllElementsSet<T>(arr: any): arr is Array<T> {
  if (!isArray(arr)) {
    return false;
  }

  for (const item of arr) {
    if (isNull(item) || typeof item === 'undefined') {
      return false;
    }
  }

  return true;
}

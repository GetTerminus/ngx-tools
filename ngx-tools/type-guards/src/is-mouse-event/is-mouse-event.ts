import { isSet } from './../is-set/is-set';


/**
 * Coerce the type to MouseEvent
 *
 * @param x - The item to test
 * @return True if the value is a MouseEvent
 *
 * @example
 * isMouseEvent(myMouseEvent);    // Returns: true
 * isMouseEvent(myKeyboardEvent); // Returns: false
 */
// tslint:disable-next-line no-any
export function isMouseEvent(x: any): x is MouseEvent {
  return !!x && isSet(x.relatedTarget);
}

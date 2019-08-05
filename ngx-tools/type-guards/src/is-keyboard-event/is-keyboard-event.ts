import { isSet } from './../is-set/is-set';


/**
 * Coerce the type to KeyboardEvent
 *
 * @param x - The item to test
 * @return True if the value is a KeyboardEvent
 *
 * @example
 * isKeyboardEvent(myKeyboardEvent); // Returns: true
 * isKeyboardEvent(myClickEvent);    // Returns: false
 */
// tslint:disable-next-line no-any
export function isKeyboardEvent(x: any): x is KeyboardEvent {
  return !!x && isSet(x.code);
}

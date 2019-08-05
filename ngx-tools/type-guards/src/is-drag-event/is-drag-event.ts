import { isSet } from './../is-set/is-set';


/**
 * Coerce the type to DragEvent
 *
 * @param x - The item to test
 * @return True if the value is a DragEvent
 *
 * @example
 * isDragEvent(myDragEvent);  // Returns: true
 * isDragEvent(myClickEvent); // Returns: false
 */
// tslint:disable-next-line no-any
export function isDragEvent(x: any): x is DragEvent {
  return !!x && isSet(x.dataTransfer);
}

import { KeyCode } from '@terminus/ngx-tools/keycodes';

import { createMouseEvent } from './create-mouse-event';
import { dispatchEvent } from './dispatch-event';


/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 *
 * @param node - The Node that should dispatch the mouse event
 * @param type - The event type
 * @param x - The location on the X axis
 * @param y - The location on the Y axis
 * @param event - The event
 * @return The mouse event
 *
 * @example
 * dispatchMouseEvent(myNativeElement, 'mousedown');
 * dispatchMouseEvent(myNativeElement, 'mousedown', 10, 10, myCustomEvent);
 */
export function dispatchMouseEvent(
  node: Node,
  type: string,
  x = 0,
  y = 0,
  event = createMouseEvent(type, x, y),
): MouseEvent {
  return dispatchEvent(node, event) as MouseEvent;
}

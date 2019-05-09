import { KeyCode } from '@terminus/ngx-tools/keycodes';
import {
  createFakeEvent,
  createKeyboardEvent,
  createMouseEvent,
  createTouchEvent,
} from './event-objects';


/**
 * Utility to dispatch any event on a Node.
 *
 * @example
 * dispatchEvent(myNativeElement, 'blur');
 *
 * @param node - The Node that should dispatch the event
 * @param event - The event to be dispatched
 * @return The event
 */
export function dispatchEvent(node: Node | Window, event: Event): Event {
  node.dispatchEvent(event);
  return event;
}


/**
 * Shorthand to dispatch a fake event on a specified node.
 *
 * @example
 * dispatchFakeEvent(myNativeElement, 'mousedown');
 *
 * @param node - The Node that should dispatch the fake event
 * @param type - The event type
 * @param canBubble - Define if the event can bubble up the DOM
 * @return The event
 */
export function dispatchFakeEvent(node: Node | Window, type: string, canBubble?: boolean): Event {
  return dispatchEvent(node, createFakeEvent(type, canBubble));
}


/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 *
 * @example
 * dispatchKeyboardEvent(myNativeElement, 'keyup', ENTER);
 *
 * @param node - The Node that should dispatch the keyboard event
 * @param type - The event type
 * @param key - The KeycodesConst type (contains code and keyCode)
 * @param target - The target event element
 * @return The keyboard event
 */
export function dispatchKeyboardEvent(node: Node, type: string, key: KeyCode, target?: Element):
    KeyboardEvent {
  return dispatchEvent(node, createKeyboardEvent(type, key, target)) as KeyboardEvent;
}


/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 *
 * @example
 * dispatchMouseEvent(myNativeElement, 'mousedown');
 *
 * @param node - The Node that should dispatch the mouse event
 * @param type - The event type
 * @param x - The location on the X axis
 * @param y - The location on the Y axis
 * @param event - The event
 * @return The mouse event
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


/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 *
 * @example
 * dispatchTouchEvent(myNativeElement, 'touchstart');
 *
 * @param node - The Node that should dispatch the touch event
 * @param type - The event type
 * @param x - The location on the X axis
 * @param y - The location on the Y axis
 * @return The touch event
 */
export function dispatchTouchEvent(node: Node, type: string, x = 0, y = 0): Event {
  return dispatchEvent(node, createTouchEvent(type, x, y));
}

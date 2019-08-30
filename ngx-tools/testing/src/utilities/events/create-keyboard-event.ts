import { KeyCode } from '@terminus/ngx-tools/keycodes';


/**
 * Dispatches a keydown event from an element.
 *
 * @param type - The event type
 * @param key - The KeyCode type
 * @param target - The target element
 * @return The event
 *
 * @example
 * createKeyboardEvent('keydown', ENTER, myInputNativeElement);
 */
export function createKeyboardEvent(
  type: string,
  key: KeyCode,
  target?: Element,
): KeyboardEvent {
  // tslint:disable: no-unsafe-any
  // NOTE: Cannot 'type' the event here due to the note about FireFox below
  // tslint:disable-next-line no-any
  const event = document.createEvent('KeyboardEvent') as any;
  event.initEvent(type, true, false);
  const originalPreventDefault: () => void = event.preventDefault;

  // NOTE: Webkit Browsers don't set the keyCode when calling the init function.
  // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
  Object.defineProperties(event, {
    key: { get: () => key.code },
    target: { get: () => target },
    code: { get: () => key.code },
  });

  // NOTE: IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
  event.preventDefault = function(): void {
    Object.defineProperty(event, 'defaultPrevented', { get: () => true });
    // FIXME: Not sure why this `as any` is needed now
    // tslint:disable-next-line no-any
    return originalPreventDefault.apply(this, arguments as any);
  };

  return event as KeyboardEvent;
  // tslint:enable: no-unsafe-any
}

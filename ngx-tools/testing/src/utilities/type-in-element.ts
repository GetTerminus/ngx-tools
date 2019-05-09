import { dispatchFakeEvent } from './dispatch-events';


/**
 * Focuses an input, sets it's value and dispatches the `input` event, simulating the user typing.
 *
 * @example
 * typeInElement('test@test.com', myEmailInputElement);
 *
 * @param value - Value to be set on the input.
 * @param element - Element onto which to set the value.
 */
export function typeInElement(value: string, element: HTMLInputElement): void {
  element.focus();
  element.value = value;
  dispatchFakeEvent(element, 'input');
}

/**
 * Helper function to retrieve desired DOM attribute's value
 *
 * @param el - HTMLElement
 * @param attr - Desired attribute
 * @return attribute's value
 */
export function getDomAttribute(el: HTMLElement, attr: string): string | undefined {
  const item = (el.attributes as NamedNodeMap).getNamedItem(attr);
  return item ? item.value : undefined;
}

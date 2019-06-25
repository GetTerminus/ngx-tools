/**
 * Define the typeCache which will hold all action types for the entire application
 */
let typeCache: {[label: string]: boolean} = {};


/**
 * Ensure you only define an action once in the entirety of the application
 *
 * @param label - The action label
 * @return uniqueLabel - The unique label
 *
 * @example
 * defineType('[log-in] User log in') as '[log-in] User log in';
 */
export function defineType<T extends string>(label: T): T {
  // Verify the label does not already exist in the cache
  if (typeCache[label]) {
    throw new Error(`Action type '${label}' is not unqiue!`);
  }

  // Save the label to the cache
  typeCache[label] = true;

  return label;
}


/**
 * Ensure action is defined only once in the entirety of the application
 *
 * @param typeEnum
 *
 * @example
 * export enum actionTypes {
 *   AssignState = '[mock-meta-reducer] Assign State',
 * };
 * defineTypeEnum(actionTypes);
 */
// tslint:disable-next-line no-any
export function defineTypeEnum(typeEnum: Record<string, any>): void  {
  for (const val in typeEnum) {
    if (typeEnum.hasOwnProperty(val)) {
      defineType(typeEnum[val]);
    }
  }
}


/**
 * Reset the type cache
 * NOTE: FOR TESTS ONLY
 */
export function resetTypeCache(): void {
  typeCache = {};
}

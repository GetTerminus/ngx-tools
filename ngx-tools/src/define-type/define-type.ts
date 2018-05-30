/**
 * Define the typeCache which will hold all action types for the entire application
 */
let typeCache: {[label: string]: boolean} = {};


/**
 * Ensure you only define an action once in the entirety of the application
 *
 * @param label The action label
 * @return uniqueLabel The unique label
 *
 * @example
 * defineType('[log-in] User log in') as '[log-in] User log in';
 */
export function defineType<T>(label: T | ''): T {
  // Verify the label does not already exist in the cache
  if (typeCache[label as string]) {
    throw new Error(`Action type '${label}' is not unqiue!`);
  }

  // Save the label to the cache
  typeCache[label as string] = true;

  return label as T;
}

export function defineTypeEnum(typeEnum: {[id: string]: any})  {
  for (const val in typeEnum) {
    if (typeEnum.hasOwnProperty(val)) {
      defineType(val);
    }
  }
}

/**
 * Reset the type cache
 * NOTE: FOR TESTS ONLY
 */
export function resetTypeCache() {
  typeCache = {};
}


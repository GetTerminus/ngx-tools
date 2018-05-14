/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. The
 * function will be called after it stops being called for N milliseconds.
 *
 * @example
 * const myFunc = () => {console.log('hi!')};
 * const myDebouncedFunc = debounce(myFunc, 200); // Will debounce all calls within 200ms
 *
 * @param func - The function to call after the debounce period
 * @param wait - The length of time to wait between calls (ms)
 * @return The debounced function
 */
export function debounce(func: Function, wait: number, windowRef: Window = window): Function {
  let timer: number | null = null;

  return function(this: any) {
    const args = arguments;

    // istanbul ignore else
    if (timer) {
      clearTimeout(timer);
    }

    timer = windowRef.setTimeout(function(this: any) {
      func.apply(this, args);
    }, wait);
  };
}


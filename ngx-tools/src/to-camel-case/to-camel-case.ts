
/*
 * 'Inspired' by https://github.com/sindresorhus/camelcase
 */


/**
 * Function that preserves camel case
 *
 * @param input - The string input
 * @return The adjusted string
 */
function preserveCamelCase(input: string): string {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < input.length; i++) {
    const c = input[i];

    if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
      input = input.slice(0, i) + '-' + input.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
      input = input.slice(0, i - 1) + '-' + input.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = c.toLowerCase() === c;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = c.toUpperCase() === c;
    }
  }

  return input;
};


function postProcess(x: string, pascalCase: boolean): string {
  return pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;
};


/**
 * Convert a string to camelCase
 *
 * @param value - The string to convert
 * @return The camelCase version of the string
 */
export function toCamelCase(input: string, pascalCase: boolean = false): string {
  if (!input) {
    return;
  }

  // Trim whitespace
  input = input.trim();

  // Test for a single character
  if (input.length === 1) {
    return pascalCase ? input.toUpperCase() : input.toLowerCase();
  }

  // Test if we are dealing with a single lowercased word
  if (/^[a-z\d]+$/.test(input)) {
    return postProcess(input, pascalCase);
  }

  // Test if there are any uppercase
  if (input !== input.toLowerCase()) {
    input = preserveCamelCase(input);
  }

  input = input
    .replace(/^[_.\- ]+/, '')
    .toLowerCase()
    .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());

  return postProcess(input, pascalCase);
}

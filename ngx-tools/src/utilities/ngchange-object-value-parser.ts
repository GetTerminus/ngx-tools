import { SimpleChanges } from '@angular/core';
import { objectDeepParse } from './object-deep-parse';

export class NgChangeObjectValueParser {

  /**
   * Function to parse previousValue from triggered by changes on ngOnChange
   * @param changes - SimpleChanges
   * @param path - string
   * @return lowest layer value or changes object itself when path cannot be parsed
   */

  static getOldValue(changes: SimpleChanges, path: string): any {
    let keys: string[];
    let key: string;

    [keys, key] = this.parsePath(path);
    return key ? objectDeepParse(changes[key].previousValue, keys) : changes;
  }

  /**
   * Function to parse currentValue from triggered by changes on ngOnChange
   * @param changes - SimpleChanges
   * @param path - string
   * @return lowest layer value or changes object itself when path cannot be parsed
   */

  static getNewValue(changes: SimpleChanges, path: string): any {
    let keys: string[];
    let key: string;

    [keys, key] = this.parsePath(path);
    return key ? objectDeepParse(changes[key].currentValue, keys) : changes;
  }

  /**
   * Function to parse path to get keys for each layer
   * @param path - string
   * @return an array of two elements, one being an array of all the keys except first one, one being the first key
   */

  static parsePath(path: string): [string[], string] {
    const keys = path.split('.');
    let key = keys.shift();

    if (!key) {
      key = keys[0];
    }
    return [keys, key];
  }
}

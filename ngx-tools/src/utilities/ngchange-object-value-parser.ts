import { SimpleChanges } from '@angular/core';
import { objectDeepParse } from './object-deep-parse';


export class NgChangeObjectValueParser {
  /**
   * Function to parse previousValue from triggered by changes on ngOnChange
   *
   * @param changes - SimpleChanges
   * @param path - string
   * @return lowest layer value or changes object itself when path cannot be parsed
   */
  static getOldValue<T>(changes: SimpleChanges, path: string): T | undefined {
    if (!path) {
      return;
    }
    const [keys, key] = this.parsePath(path);

    if (key && keys.length < 1) {
      return changes[key] ? changes[key].previousValue : undefined;
    } else {
      return (key && changes[key]) ? objectDeepParse(changes[key].previousValue, keys) : undefined;
    }
  }


  /**
   * Function to parse currentValue from triggered by changes on ngOnChange
   *
   * @param changes - SimpleChanges
   * @param path - string
   * @return lowest layer value or changes object itself when path cannot be parsed
   */
  static getNewValue<T>(changes: SimpleChanges, path: string): T | undefined {
    if (!path) {
      return;
    }
    const [keys, key] = this.parsePath(path);
    return (key && changes[key]) ? objectDeepParse(changes[key].currentValue, keys) : undefined;
  }


  /**
   * Function to parse path to get keys for each layer
   *
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

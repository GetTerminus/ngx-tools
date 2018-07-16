import { SimpleChanges } from '@angular/core';
import { objectDeepParse } from './object-deep-parse';

export class ChangesUtil {

  static getOldValue(changes: SimpleChanges, path: string): any {
    let keys: string[];
    let key: string;

    [keys, key] = this.parsePath(path);
    return key ? objectDeepParse(changes[key].previousValue, keys) : changes;
  }

  static getNewValue(changes: SimpleChanges, path: string): any {
    let keys: string[];
    let key: string;

    [keys, key] = this.parsePath(path);
    return key ? objectDeepParse(changes[key].currentValue, keys) : changes;
  }

  static parsePath(path: string): [string[], string] {
    const keys = path.split('.');
    let key = keys.shift();

    if (!key) {
      key = keys[0];
    }
    return [keys, key];
  }
}

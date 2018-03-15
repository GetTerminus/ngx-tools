<h1>Utilities</h1>

**Import from:** `@terminus/ngx-tools`

```typescript
// Example usage:
import { isArray } from '@terminus/ngx-tools';

isArray([]); // Returns: true
```


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [`arrayContainsObject`](#arraycontainsobject)
- [`debounce`](#debounce)
- [`groupBy`](#groupby)
- [`hasRequiredControl`](#hasrequiredcontrol)
- [`noop`](#noop)
- [`retryWithBackoff`](#retrywithbackoff)
- [Services](#services)
  - [Document Service](#document-service)
  - [Window Service](#window-service)
- [Verify Types](#verify-types)
  - [`isArray`](#isarray)
  - [`isBoolean`](#isboolean)
  - [`isFunction`](#isfunction)
  - [`isObject`](#isobject)
  - [`isString`](#isstring)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### `arrayContainsObject`

Check if an object exists in an array.

```typescript
import { arrayContainsObject } from '@terminus/ngx-tools';

// The object we want to find:
const object = {id: 2};
// The array we are searching:
const arr = [{id: 1}, {id: 2}, {id: 3}];
// A comparator used to determine if two objects are a match:
// (For this example, we are comparing objects by ID)
const comparator = (v) => v.id;

arrayContainsObject(object, array, comparator); // Returns: true
```


### `debounce`

Create a debounced function.

```typescript
import { debounce } from '@terminus/ngx-tools';

const myFunc = () => {console.log('hi!')};
// Create a function that will debounce all calls within 200ms:
const myDebouncedFunc = debounce(myFunc, 200);

for (const value of [1, 2, 3]) {
  myDebouncedFunc();
}
// 'Hi!' will only be logged to the console once
```


### `groupBy`

Return an object containing arrays split by property.

```typescript
import { groupBy } from '@terminus/ngx-tools';

interface MyObj {
  a: string;
  b: number;
}
const myArray: MyObj[] = [{a: 'foo', b: 1}, {a: 'bar', b: 6}, {a: 'foo', b: 6}];

groupBy<MyObj, keyof MyObj>(myArray, 'a');
// Returns:
// {
//   foo: [{a: 'foo', b: 1}, {a: 'foo', b: 6}],
//   bar: [{a: 'bar', b: 6}],
// }
```


### `hasRequiredControl`

Check if an `AbstractControl` or `FormGroup` has a required validator.

```typescript
import { FormControl, FormGroup } from '@angular/forms';
import { hasRequiredControl } from '@terminus/ngx-tools';

const control = new FormControl(null, [Validators.required];
const group = new FormGroup({myControl: [null, [Validators.required]]});

hasRequiredControl(control); // Returns: true
hasRequiredControl(group); // Returns: true
```


### `noop`

Provides a placeholder function.

```typescript
import { noop } from '@terminus/ngx-tools';

const myFunc = noop;
myFunc(); // Returns: undefined
```


### `retryWithBackoff`

Helper to retry an Observable stream [X] times.

- `retryWithBackoff()`: Retry a stream X times with a jittered back-off.
- `exponentialBackoffDelayCalculator()`: Create a custom back-off calculator.

```typescript
import { retryWithBackoff } from '@terminus/ngx-tools';

return this.myApi.doSomething()
  .pipe(
    map((res: MyResponse) => {
      if (res) {
        return res;
      } else {
        return null;
      }
    }),
    // If `getSomething()` fails, the connection will be retried 3 times
    retryWithBackoff({}), // Using default options
  )
;
```

If custom timing, jitter, etc is needed, create a custom back-off calculator and pass it to
`retryWithBackoff`.

```typescript
import {
  retryWithBackoff,
  exponentialBackoffDelayCalculator,
} from '@terminus/ngx-tools';

// Set custom delay options
const calcOpts: DelayCalculator = {
  jitter: true,
  jitterFactor: .3,
  backOffFactor: 2,
  baseWaitTime: 100,
}

// Create a retrier with a custom delay calculator:
retryWithBackoff({retries: 3, delayCalculator: exponentialBackoffDelayCalculator(calcOpts)})
```


### Services

#### Document Service

An injectable Angular service that provides access to the Document object.

```typescript
import { TsDocumentService } from '@terminus/ngx-tools';

@Component({...})
export class MyComponent implements OnInit {

  constructor(
    private documentService: TsDocumentService,
  ) {}

  public ngOnInit(): void {
    console.log('Document object: ', this.documentService.document);
  }
}
```

> A mock of this service is available via the testing module:
> `import { TsDocumentServiceMock } from '@terminus/ngx-tools/testing';`
> [:books: Docs][docs-testing]


#### Window Service

An injectable Angular service that provides access to the global Window object.

```typescript
import { TsWindowService } from '@terminus/ngx-tools';

@Component({...})
export class MyComponent implements OnInit {

  constructor(
    private windowService: TsWindowService,
  ) {}

  public ngOnInit(): void {
    console.log('Window object: ', this.windowService.nativeWindow);
  }
}
```

> A mock of this service is available via the testing module:
> `import { TsWindowServiceMock } from '@terminus/ngx-tools/testing';`
> [:books: Docs][docs-testing]


### Verify Types

Consistent, tested, and well performing checks for various types.

#### `isArray`

Check if value is an Array.

```typescript
import { isArray } from '@terminus/ngx-tools';

isArray([1, 2]); // Returns: true
isArray('hi'); // Returns: false
```


#### `isBoolean`

Check if value is a Boolean.

```typescript
import { isBoolean } from '@terminus/ngx-tools';

isBoolean(true); // Returns: true
isBoolean('true'); // Returns: false
```


#### `isFunction`

Check if value is a Function.

```typescript
import { isFunction } from '@terminus/ngx-tools';

isFunction(() => {}); // Returns: true
isFunction('foo'); // Returns: false
```


#### `isObject`

Check if value is an Object.

```typescript
import { isObject } from '@terminus/ngx-tools';

isObject({}); // Returns: true
isObject('foo'); // Returns: false
```


#### `isString`

Check if value is a String.

```typescript
import { isString } from '@terminus/ngx-tools';

isString('foo'); // Returns: true
isString({}); // Returns: false
```




<!-- LINKS -->
[docs-testing]: https://github.com/GetTerminus/ngx-tools/tree/master/ngx-tools/testing/README.md
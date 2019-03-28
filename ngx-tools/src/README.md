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

- [`applyMixins`](#applymixins)
- [`arrayContainsObject`](#arraycontainsobject)
- [`compactArray`](#compactarray)
- [`debounce`](#debounce)
- [`defineType` and `defineTypeEnum`](#definetype-and-definetypeenum)
- [`getFormControlValue`](#getformcontrolvalue)
- [`groupBy`](#groupby)
- [`hasRequiredControl`](#hasrequiredcontrol)
- [`inputHasChanged`](#inputhaschanged)
- [`noop`](#noop)
- [Object deep get & deep set](#object-deep-get--deep-set)
- [`publicShapeOf`](#publicshapeof)
- [`retryWithBackoff`](#retrywithbackoff)
- [`httpRetryer`](#httpretryer)
  - [Retry conditions](#retry-conditions)
- [`returnValuesByKeys`](#returnvaluesbykeys)
- [`roundNumber`](#roundnumber)
- [`setFormControlValue`](#setformcontrolvalue)
- [`toCamelCase`](#tocamelcase)
- [`untilComponentDestroyed`](#untilcomponentdestroyed)
- [`updateControlOnInputChanges`](#updatecontroloninputchanges)
- [Services](#services)
  - [Cookie Service](#cookie-service)
  - [Document Service](#document-service)
  - [Window Service](#window-service)
- [Verify Types](#verify-types)
  - [`isArray`](#isarray)
  - [`isBoolean`](#isboolean)
  - [`isFunction`](#isfunction)
  - [`isNumber`](#isnumber)
  - [`isObject`](#isobject)
  - [`isString`](#isstring)
  - [`arrayHasAllElementsSet`](#arrayhasallelementsset)
- [`VERSION`](#version)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### `applyMixins`

[[source]](apply-mixins/apply-mixins.ts)

A helper function to apply TypeScript mixins to a base class:

```typescript
import { applyMixins } from '@terminus/ngx-tools';


// Disposable Mixin
class Disposable {
  isDisposed: boolean;
  dispose() {
    this.isDisposed = true;
  }

}

// Activatable Mixin
class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

// Base class
class SmartObject implements Disposable, Activatable {
  // Disposable
  isDisposed: boolean = false;
  dispose: () => void;
  // Activatable
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;

  interact() {
    this.activate();
  }
}

// Apply the mixins
applyMixins(SmartObject, [Disposable, Activatable]);

// Initialize the base class
const smartObj = new SmartObject();
smartObj.interact();

smartObj.isActive
// Returns: `true`
```


### `arrayContainsObject`

[[source]](array-contains-object/array-contains-object.ts)

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


### `compactArray`

[[source]](compact-array/compact-array.ts)

Remove `undefined` or `null` items from an array:

```typescript
import { compactArray } from '@terminus/ngx-tools';

const myArray: (string | undefined | null)[] = ['foo', null, 'bar', undefined, 'baz'];

compactArray(myArray);
// Returns: `['foo', 'bar', 'baz']`
// Return Type: `string[]`
```


### `debounce`

[[source]](debounce/debounce.ts)

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

### `defineType` and `defineTypeEnum`

[[source]](define-type/define-type.ts)

Ensure action is defined only once in the entirety of the application

```typescript
import { defineTypeEnum } from '@terminus/ngx-tools';

export enum actionTypes {
  AssignState = '[mock-meta-reducer] Assign State',
};

defineTypeEnum(actionTypes);
```

### `getFormControlValue`

[[source]](get-form-control-value/get-form-control-value.ts)

Helper function to retrieve the current value of a control within a form group:

```typescript
import { FormGroup } from '@angular/forms';
import { getFormControlValue } from '@terminus/ngx-tools';

// Create a form group
const formBuilder = new FormBuilder();
const myForm = formBuilder.group({
  control1: ['foo'],
  control2: [null],
});

getFormControlValue(myForm, 'control1');
// Returns: `foo`

getFormControlValue(myForm, 'control2');
// Returns: `null`
```


### `groupBy`

[[source]](group-by/group-by.ts)

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

[[source]](has-required-control/has-required-control.ts)

Check if an `AbstractControl` or `FormGroup` has a required validator.

```typescript
import { FormControl, FormGroup } from '@angular/forms';
import { hasRequiredControl } from '@terminus/ngx-tools';

const control = new FormControl(null, [Validators.required];
const group = new FormGroup({myControl: [null, [Validators.required]]});

hasRequiredControl(control); // Returns: true
hasRequiredControl(group); // Returns: true
```


### `inputHasChanged`

[[source]](input-has-changed/input-has-changed.ts)

Helper function to determine if an input has changed.

```typescript
import { SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { inputHasChanged } from '@terminus/ngx-tools';

...
  @Input
  public myInput;

  ngOnChanges(changes: SimpleChanges) {
    // This will verify that the `myInput` change object exists and the current value
    // is not the same as the previous value
    if (inputHasChanged(changes, 'myInput')) {
      // My input changed.. do something
    }
  }
...
```


### `noop`

[[source]](noop/noop.ts)

Provides a placeholder function.

```typescript
import { noop } from '@terminus/ngx-tools';

const myFunc = noop;
myFunc(); // Returns: undefined
```


### Object deep get & deep set

[[get source]](object-deep-get/object-deep-get.ts)
[[set source]](object-deep-set/object-deep-set.ts)

Retrieve or set deep object values.

```typescript
import { objectDeepGet, objectDeepSet } from '@terminus/ngx-tools';

const myObj = {
  foo: {
    bar: {
      baz: true,
    },
  },
};

// Get the value of `baz`
const valueFromObject: boolean = objectDeepGet(myObj, 'foo.bar.baz');

// Update `baz` to be `false`
const updatedObject = objectDeepSet(myObj, 'foo.bar.baz', false);
```


### `publicShapeOf`
[[source]](public-shape-of/public-shape-of.ts)

A type that allows consumer to extend a class with private properties

```typescript
  class Foo {
    foo1(x: string) {}
    private foo2(y: number) {}
  }
  class Bar implements publicShapeOf<Foo> {
    foo1(x: string) {}
  }
```


### `retryWithBackoff`

[[source]](retry-with-backoff/retry-with-backoff.ts)

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

### `httpRetryer`

[[source]](http-retryer/http-retryer.ts)

Helper to retry an Observable stream only when it sees an HttpError it recognizes.

Number of retries is configurable, and the first attempt is not counted. A reties
value of 3 will result in the first attempt, plus 3 retries for a total of 4 attempts.

```typescript
import { httpRetryer } from '@terminus/ngx-tools';

return this.http.get('/foo')
  .pipe(
    map((res: MyResponse) => {
      doDomainBusniessLogic(res);
    }),
    // If `get()` fails, the connection will be retried 2 times by default
    httpRetryer({}),
  )
;

return this.http.get('/foo')
  .pipe(
    map((res: MyResponse) => {
      doDomainBusniessLogic(res);
    }),
    httpRetryer({retries: 4}), // specify number of allowed retries
;
```

#### Retry conditions
1. HTTP Error code from 500 to 599
2. HTTP Error Code 429
  * Respects the `Retry-After` header as a Date string or MS delay.

### `returnValuesByKeys`

[[source]](return-array-value-from-hash/return-array-value-from-hash.ts)

Helper function to return an array of values from an hash object

```typescript
import { returnValuesByKeys } from '@terminus/ngx-tools';

  const tactic1: Tactic = {
    id: 1,
    name: 'tactic1',
    goal: 'goal1',
  }
  const tactic2: Tactic = {
    id: 2,
    name: 'tactic2',
    goal: 'goal2',
  }
  const tactics = { 1: tactic1, 2: tactic2 }

returnValuesByKeys([1], tactics)
// Would return `[tactic1]`
```


### `roundNumber`

[[source]](round-number/round-number.ts)

Helper function to round a number.

```typescript
import { roundNumber } from '@terminus/ngx-tools';

roundNumber(1.050) // Returns `1`
roundNumber(1.005, 2) // Returns `1.01`
roundNumber(3456.3456, -2) // Returns `3500`
```


### `setFormControlValue`

[[source]](set-form-control-value/set-form-control-value.ts)

Helper function to set a control value within a form group:

```typescript
import { FormGroup } from '@angular/forms';
import { setFormControlValue } from '@terminus/ngx-tools';

// Create a form group
const formBuilder = new FormBuilder();
const myForm = formBuilder.group({
  control1: ['foo'],
  control2: [null],
});

setFormControlValue(myForm, 'control1');
// Set control1's value

setFormControlValue(myForm, 'control2');
// Returns: `undefined`
```


### `toCamelCase`

[[source]](to-camel-case/to-camel-case.ts)

Convert a string to `camelCase`:

```typescript
import { toCamelCase } from '@terminus/ngx-tools';

toCamelCase('EQUIPMENT_CLASS_NAME')
toCamelCase('equipment class name')
toCamelCase('equipment__class--name')
// All return: `equipmentClassName`
```


### `untilComponentDestroyed`

[[source]](until-component-destroyed/until-component-destroyed.ts)

A helper `pipe` operator to unsubscribe from Observables when the component `ngOnDestroy` lifecycle
event is fired.

> NOTE: the component **must define the `ngOnDestroy` function.** Angular will only call lifecycle
> events if they exist at compilation time.

```typescript
import { untilComponentDestroyed } from '@terminus/ngx-tools';

@Component({
  ...
})
class TestHostDoubleComponent implements OnDestroy, OnInit {
  this.myInterval = interval(200).pipe(
    // Pass in the `this` context:
    untilComponentDestroyed(this),
  ).subscribe((v: number) => {
    // This will continue until the component is destroyed
  });

  // This must be present! (even if empty)
  ngOnDestroy() {}
}
```


### `updateControlOnInputChanges`

[[source]](update-control-on-input-changes/update-control-on-input-changes.ts)

Helper function to set value to a form control if an input has changed.

```typescript
import { SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { updateControlOnInputChanges } from '@terminus/ngx-tools';

...
  @Input
  public myInput;
  @Input
  public myFormControl;

  ngOnChanges(changes: SimpleChanges) {
    // This will verify that whether an input has been changed. If it's changed
    // and there is a form control, form control's value will be updated to latest value
    updateControlOnInputChanges(changes, 'myInput', this.myFormControl));
  }
...
```


### Services

#### Cookie Service

[[source]](cookie-service/cookie.service.ts)

An injectable Angular service that provides control over a browser cookie.

```typescript
import { TsCookieService } from '@terminus/ngx-tools';

@Component({...})
export class MyComponent implements OnInit {
  value: string;

  constructor(private cookieService: TsCookieService) {}

  public ngOnInit(): void {
    this.cookieService.set('Foo', 'My cookie contents');
    this.value = this.cookieService.get('Foo');
  }
}
```

> Note: This service was based off of [ngx-cookie-service](https://github.com/7leads/ngx-cookie-service) which in turn was
> based off of [ng2-cookies](https://github.com/BCJTI/ng2-cookies).


#### Document Service

[[source]](document/document.service.ts)

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

[[source]](window/window.service.ts)

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

[[source]](verify-types/is-array/is-array.ts)

Check if a value is an Array.

```typescript
import { isArray } from '@terminus/ngx-tools';

isArray([1, 2]); // Returns: true
isArray('hi'); // Returns: false
```


#### `isBoolean`

[[source]](verify-types/is-boolean/is-boolean.ts)

Check if a value is a Boolean.

```typescript
import { isBoolean } from '@terminus/ngx-tools';

isBoolean(true); // Returns: true
isBoolean('true'); // Returns: false
```


#### `isFunction`

[[source]](verify-types/is-function/is-function.ts)

Check if a value is a Function.

```typescript
import { isFunction } from '@terminus/ngx-tools';

isFunction(() => {}); // Returns: true
isFunction('foo'); // Returns: false
```


#### `isNumber`

[[source]](verify-types/is-number/is-number.ts)

Check if a value is a Number.

```typescript
import { isNumber } from '@terminus/ngx-tools';

isNumber(12); // Returns: true
isNumber('foo'); // Returns: false
```


#### `isObject`

[[source]](verify-types/is-object/is-object.ts)

Check if a value is an Object.

```typescript
import { isObject } from '@terminus/ngx-tools';

isObject({}); // Returns: true
isObject('foo'); // Returns: false
```


#### `isString`

[[source]](verify-types/is-string/is-string.ts)

Check if a value is a String.

```typescript
import { isString } from '@terminus/ngx-tools';

isString('foo'); // Returns: true
isString({}); // Returns: false
```

#### `arrayHasAllElementsSet`

[[source]](verify-types/array-has-all-elements-set/array-has-all-elements-set.ts)

Check if a value is an array and has all of its value as non-null non-undefined
values. Provides strongly typed conditional checks

```typescript
import { arrayHasAllElementsSet } from '@terminus/ngx-tools';

arrayHasAllElementsSet([1, false]); // Returns: true
arrayHasAllElementsSet([1, null]); // Returns: false

function foo(x: [string | undefined, number | undefined]) {
  if (arrayHasAllElementsSet(x)) {
    x[0].substring(1,4) // no compiler error since TS knows all elements are not undefined
  }
}

// Can also be used in the `filter` lettable operator
filter(arrayHasAllElementsSet) // next operator receives strongly typed inputs
```


### `VERSION`

[[source]](version/version.ts)

An object containing the current version of the library.

```typescript
import { VERSION } from '@terminus/ngx-tools';

VERSION.full // Returns: 1.2.3
VERSION.major // Returns: 1
VERSION.minor // Returns: 2
VERSION.patch // Returns: 3
```




<!-- LINKS -->
[docs-testing]: https://github.com/GetTerminus/ngx-tools/tree/master/ngx-tools/testing/README.md

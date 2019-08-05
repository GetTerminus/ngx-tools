<h1>Type Guards</h1>

A collection of consistent, tested, and well-performing checks for various types.

**Import from:** `@terminus/ngx-tools/type-guards`


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [`arrayHasAllElementsSet`](#arrayhasallelementsset)
- [`isAbstractControl`](#isabstractcontrol)
- [`isArrayOfType`](#isarrayoftype)
- [`isArray`](#isarray)
- [`isBoolean`](#isboolean)
- [`isDragEvent`](#isdragevent)
- [`isFunction`](#isfunction)
- [`isHTMLInputElement`](#ishtmlinputelement)
- [`isHttpResponse`](#ishttpresponse)
- [`isNull`](#isnull)
- [`isNumber`](#isnumber)
- [`isObject`](#isobject)
- [`isSet`](#isset)
- [`isString`](#isstring)
- [`isTokenResponse`](#istokenresponse)
- [`isUndefined`](#isundefined)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## `arrayHasAllElementsSet`

[[source]](src/array-has-all-elements-set/array-has-all-elements-set.ts)

Determine if a value is an array and has all of its values as non-null non-undefined values. Provides strongly typed conditional checks.

```typescript
import { arrayHasAllElementsSet } from '@terminus/ngx-tools/type-guards';

arrayHasAllElementsSet<number>([1, null, 6])          // Returns: false
arrayHasAllElementsSet<number, string>([1, 'foo', 8]) // Returns: true

// Can also be used in the `filter` lettable operator:
filter(arrayHasAllElementsSet) // next operator receives strongly typed inputs
```


## `isAbstractControl`

[[source]](src/is-abstract-control/is-abstract-control.ts)

Determine if a value is an `AbstractControl`.

```typescript
import { isAbstractControl } from '@terminus/ngx-tools/type-guards';

isAbstractControl(new FormControl()); // Returns: true
isAbstractControl('hi');              // Returns: false
```


## `isArrayOfType`

[[source]](src/is-array-of-type/is-array-of-type.ts)

Determine if all values in an Array is of a certain type.

```typescript
import { isArrayOfType, isNumber } from '@terminus/ngx-tools/type-guards';

isArrayOfType<number>([1, 5], isNumber)     // Returns: true
isArrayOfType<number>([1, 'foo'], isNumber) // Returns: false
```


## `isArray`

[[source]](src/is-array/is-array.ts)

Determine if a value is an Array.

```typescript
import { isArray } from '@terminus/ngx-tools/type-guards';

isArray([1, 2]); // Returns: true
isArray('hi');   // Returns: false
```


## `isBoolean`

[[source]](src/is-boolean/is-boolean.ts)

Determine if a value is a Boolean.

```typescript
import { isBoolean } from '@terminus/ngx-tools/type-guards';

isBoolean(true);   // Returns: true
isBoolean('true'); // Returns: false
```


## `isDragEvent`

[[source]](src/is-drag-event/is-drag-event.ts)

Determine if an event is a `DragEvent`.

```typescript
import { isDragEvent } from '@terminus/ngx-tools/type-guards';

isDragEvent(myDragEvent);  // Returns: true
isDragEvent(myClickEvent); // Returns: false
```


## `isFunction`

[[source]](src/is-function/is-function.ts)

Determine if a value is a Function.

```typescript
import { isFunction } from '@terminus/ngx-tools/type-guards';

isFunction(() => {}); // Returns: true
isFunction('foo');    // Returns: false
```


## `isHTMLInputElement`

[[source]](src/is-html-input-element/is-html-input-element.ts)

Determine if a value is an HTML input element.

```typescript
import { isHTMLInputElement } from '@terminus/ngx-tools/type-guards';

const myInput = document.querySelector('#myInput');
const myDiv = document.querySelector('#myDiv');

isHTMLInputElement(myInput); // Returns: true
isHTMLInputElement(myDiv);   // Returns: false
```


## `isHttpResponse`

[[source]](src/is-http-response/is-http-response.ts)

Determine if a value is an HTTP response.

```typescript
import { isHttpResponse } from '@terminus/ngx-tools/type-guards';

isHttpResponse({headers: {...}});             // Returns: true
isHttpResponse<MyResponseType>({foo: 'bar'}); // Returns: false
```


## `isNull`

[[source]](src/is-null/is-null.ts)

Determine if a value is Null.

```typescript
import { isNull } from '@terminus/ngx-tools/type-guards';

isNull(null); // Returns: true
isNull(1);    // Returns: false
```


## `isNumber`

[[source]](src/is-number/is-number.ts)

Determine if a value is a Number.

```typescript
import { isNumber } from '@terminus/ngx-tools/type-guards';

isNumber(12);    // Returns: true
isNumber('foo'); // Returns: false
```


## `isObject`

[[source]](src/is-object/is-object.ts)

Determine if a value is an Object.

```typescript
import { isObject } from '@terminus/ngx-tools/type-guards';

isObject({});    // Returns: true
isObject('foo'); // Returns: false
```


## `isSet`

[[source]](src/is-set/is-set.ts)

Determine if a value is set.

```typescript
import { isSet } from '@terminus/ngx-tools/type-guards';

isSet<string>('hi');   // Returns: true
isSet<number>(void 0); // Returns: false
```


## `isString`

[[source]](src/is-string/is-string.ts)

Determine if a value is a String.

```typescript
import { isString } from '@terminus/ngx-tools/type-guards';

isString('foo'); // Returns: true
isString({});    // Returns: false
```


## `isTokenResponse`

[[source]](src/is-token-response/is-token-response.ts)

Determine if a value is a `TokenResponse`.

```typescript
import { isTokenResponse } from '@terminus/ngx-tools/type-guards';

isTokenResponse({token: 'any'})               // Returns: true
isTokenResponse<MyResponseType>({foo: 'bar'}) // Returns: false
```


## `isUndefined`

[[source]](src/is-undefined/is-undefined.ts)

Determine if a value is undefined.

```typescript
import { isUndefined } from '@terminus/ngx-tools/type-guards';

isUndefined(undefined) // Returns: true
isUndefined(null)      // Returns: false
isUndefined('foo')     // Returns: false
```

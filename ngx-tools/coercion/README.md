<h1>Coercion</h1>

A collection of functions to coerce values to a specific property type.

**Import from:** `@terminus/ngx-tools/coercion`


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [`coerceArray`](#coercearray)
- [`coerceBooleanProperty`](#coercebooleanproperty)
- [`coerceDateProperty`](#coercedateproperty)
- [`coerceNumberProperty`](#coercenumberproperty)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## `coerceArray`

[[source]](src/array/array.ts)

Wraps the provided value in an array, unless the provided value is an array.

```typescript
import { coerceArray } from '@terminus/ngx-tools/coercion';

coerceArray<string>('foo'); // Returns: ['foo']
coerceArray(['foo']);       // Returns: ['foo']
```


## `coerceBooleanProperty`

[[source]](src/boolean/boolean-property.ts)

Coerces a value to a boolean.

```typescript
import { coerceBooleanProperty } from '@terminus/ngx-tools/coercion';

coerceBooleanProperty('true'); // Returns: true
```


## `coerceDateProperty`

[[source]](src/date/date-property.ts)

Coerces a value to a date. Tested against strings of RFC2822 & RFC1123

```typescript
import { coerceDateProperty } from '@terminus/ngx-tools/coercion';

coerceDateProperty('Wed, 21 Oct 2015 07:28:00 GMT'); // Returns: Date object
// Also supports a custom fallback value:
coerceDateProperty<boolean>('foo', false);           // Returns: false
```


## `coerceNumberProperty`

[[source]](src/number/number-property.ts)

Coerces a value to a number.

```typescript
import { coerceNumberProperty } from '@terminus/ngx-tools/coercion';

coerceNumberProperty('12');                  // Returns: 12
// Also supports a custom fallback value:
coerceNumberProperty<boolean>('foo', false); // Returns: false
```

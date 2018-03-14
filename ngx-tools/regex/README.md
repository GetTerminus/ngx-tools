<h1>Regex</h1>

**Import from:** `@terminus/ngx-tools/regex`

```typescript
// Example usage:
import { emailRegex } from '@terminus/ngx-tools/regex';

emailRegex.test('foo@bar.com'); // Returns true
```


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Numbers](#numbers)
  - [`onlyNumbersRegex`](#onlynumbersregex)
  - [`containsNumbersRegex`](#containsnumbersregex)
- [Letters](#letters)
  - [`onlyLettersRegex`](#onlylettersregex)
  - [`containsLowercase`](#containslowercase)
  - [`containsUppercase`](#containsuppercase)
- [Special Characters](#special-characters)
- [Email](#email)
- [Password](#password)
- [Phone](#phone)
- [Postal Code](#postal-code)
- [URL](#url)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Numbers

### `onlyNumbersRegex`

- `onlyNumbersRegex`: Regex requiring only numbers.

```typescript
import { onlyNumbersRegex } from '@terminus/ngx-tools/regex';

onlyNumbersRegex.test('123v'); // false
onlyNumbersRegex.test('1234'); // true
```

### `containsNumbersRegex`

- `containsNumbersRegex`: Regex requiring at least 1 number.
- `createContainsNumbersRegex`: Create a regex that requires at least X numbers.

```typescript
import { containsNumbersRegex } from '@terminus/ngx-tools/regex';

containsNumbersRegex.test('FOO'); // false
containsNumbersRegex.test('Foo2'); // true
```

To verify that a certain amount of numbers exist, create a new regex with a minimum:

```typescript
import { createContainsNumbersRegex } from '@terminus/ngx-tools/regex';

// Create a regex that requires at least 2 numbers
const regex = createContainsNumbersRegex(2);
regex.test('Foo6'); // false
regex.test('F2oo5'); // true
```


## Letters

### `onlyLettersRegex`

- `onlyLettersRegex`: Regex requiring only English letters.

```typescript
import { onlyLettersRegex } from '@terminus/ngx-tools/regex';

onlyLettersRegex.test('Fo6o'); // false
onlyLettersRegex.test('Foo'); // true
```


### `containsLowercase`

- `containsLowercaseRegex`: Regex requiring at least 1 lowercase letter.
- `createContainsLowercaseRegex`: Create a regex that requires at least X lowercase characters.

```typescript
import { containsLowercaseRegex } from '@terminus/ngx-tools/regex';

containsLowercaseRegex.test('FOO'); // false
containsLowercaseRegex.test('FoO'); // true
```

To verify that a certain amount of lowercase characters exist you can create a new regex with a
minimum:

```typescript
import { createContainsLowercaseRegex } from '@terminus/ngx-tools/regex';

// Create a regex that requires at least 2 lowercase letters
const regex = createContainsLowercaseRegex(2);
regex.test('FOo'); // false
regex.test('Foo'); // true
```

### `containsUppercase`

- `containsUppercaseRegex`: Regex requiring at least 1 uppercase letter.
- `createContainsUppercaseRegex`: Create a regex that requires at least X uppercase characters.

```typescript
import { containsUppercaseRegex } from '@terminus/ngx-tools/regex';

containsUppercaseRegex.test('foo'); // false
containsUppercaseRegex.test('Foo'); // true
```

To verify that a certain amount of uppercase characters exist you can create a new regex with a
minimum:

```typescript
import { createContainsUppercaseRegex } from '@terminus/ngx-tools/regex';

// Create a regex that requires at least 2 uppercase letters
const regex = createContainsUppercaseRegex(2);
regex.test('Foo'); // false
regex.test('FOo'); // true
```


## Special Characters

- `containsSpecialCharacterRegex`: Regex requiring at least 1 special character.
- `createContainsSpecialCharacterRegex`: Create a regex that requires at least X special characters.

```typescript
import { containsSpecialCharacterRegex } from '@terminus/ngx-tools/regex';

containsSpecialCharacterRegex.test('foo'); // false
containsSpecialCharacterRegex.test('Fo&o'); // true
```

To verify that a certain amount of special characters exist you can create a new regex with a
minimum:

```typescript
import { createContainsSpecialCharacterRegex } from '@terminus/ngx-tools/regex';

// Create a regex that requires at least 2 special characters
const regex = createContainsSpecialCharacterRegex(2);
regex.test('Fo$o'); // false
regex.test('F$o#'); // true
```


## Email

`emailRegex`: Regex requiring a valid email address.

```typescript
import { emailRegex } from '@terminus/ngx-tools/regex';

emailRegex.test('foobarcom'); // false
emailRegex.test('foo@bar.com'); // true
```


## Password

:warning: NOTE: Refactor scheduled: https://github.com/GetTerminus/terminus-ui/issues/698 :warning:

> Once the refactor is complete, there will be no need for a single regex to test the password. We
> will be composing the password validator by combining several lower-level validators.

`passwordRegex`: Between 6 and 100 characters, is a string, and has at least 1 number.

```typescript
import { passwordRegex } from '@terminus/ngx-tools/regex';

passwordRegex.test('V9Cpp7RGB9'); // true
passwordRegex.test('MA9Lv'); // false
```

## Phone

`phoneRegex`: Any valid US phone number.

```typescript
import { phoneRegex } from '@terminus/ngx-tools/regex';

phoneRegex.test('020 7183 8750'); // false
phoneRegex.test('(123) 123-1234'); // true
```


## Postal Code

`postalRegex`: Any valid US postal code.

```typescript
import { postalRegex } from '@terminus/ngx-tools/regex';

postalRegex.test('12345-12'); // false
postalRegex.test('98765-4321'); // true
```


## URL

`urlRegex`: Any valid URL (http/ftp/unicode/IP/etc).

```typescript
import { urlRegex } from '@terminus/ngx-tools/regex';

urlRegex.test('http://0.0.0.0'); // false
urlRegex.test('http://foo.com/blah_blah/'); // true
```


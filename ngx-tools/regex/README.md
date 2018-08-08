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

- [Credit Card](#credit-card)
- [Date](#date)
- [Email](#email)
- [Numbers](#numbers)
  - [`onlyNumbersRegex`](#onlynumbersregex)
  - [`containsNumbersRegex`](#containsnumbersregex)
- [Letters](#letters)
  - [`onlyLettersRegex`](#onlylettersregex)
  - [`containsLowercase`](#containslowercase)
  - [`containsUppercase`](#containsuppercase)
- [Password](#password)
- [Phone](#phone)
- [Postal Code](#postal-code)
- [Special Characters](#special-characters)
- [URL](#url)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Credit Card

[[source]](src/credit-card/credit-card.regex.ts)

`creditCardRegex`: Regex requiring a valid credit card number.

```typescript
import { creditCardRegex } from '@terminus/ngx-tools/regex';

creditCardRegex.test('3852000023237'); // false
creditCardRegex.test('4242424242424242'); // true
```


## Date

[[source]](src/date/date.regex.ts)

`dateRegex`: Regex requiring a valid date in the format `(M)M/(D)D/(YY)YY`.

- Only supports four digit years beginning with `19` or `20`.
- Month and day allow an optional leading `0` and can be one or two digits.
- Dashes (`-`) are also allowed instead of slashes (`/`).

```typescript
import { dateRegex } from '@terminus/ngx-tools/regex';

dateRegex.test('3/3/1642'); // false
dateRegex.test('3/3/18'); // true
dateRegex.test('01-22-1998'); // true
```


## Email

[[source]](src/email/email.regex.ts)

`emailRegex`: Regex requiring a valid email address.

```typescript
import { emailRegex } from '@terminus/ngx-tools/regex';

emailRegex.test('foobarcom'); // false
emailRegex.test('foo@bar.com'); // true
```


## Numbers

### `onlyNumbersRegex`

[[source]](src/numbers/only-numbers.regex.ts)

- `onlyNumbersRegex`: Regex requiring only numbers.

```typescript
import { onlyNumbersRegex } from '@terminus/ngx-tools/regex';

onlyNumbersRegex.test('123v'); // false
onlyNumbersRegex.test('1234'); // true
```

### `containsNumbersRegex`

[[source]](src/numbers/contains-numbers.regex.ts)

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

[[source]](src/letters/only-letters.regex.ts)

- `onlyLettersRegex`: Regex requiring only English letters.

```typescript
import { onlyLettersRegex } from '@terminus/ngx-tools/regex';

onlyLettersRegex.test('Fo6o'); // false
onlyLettersRegex.test('Foo'); // true
```


### `containsLowercase`

[[source]](src/letters/contains-lower.regex.ts)

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

[[source]](src/letters/contains-upper.regex.ts)

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


## Password

[[source]](src/password/password.regex.ts)

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

[[source]](src/usa-phone/usa-phone.regex.ts)

`phoneRegex`: Any valid US phone number.

```typescript
import { phoneRegex } from '@terminus/ngx-tools/regex';

phoneRegex.test('020 7183 8750'); // false
phoneRegex.test('(123) 123-1234'); // true
```


## Postal Code

[[source]](src/postal/usa-postal.regex.ts)

`postalRegex`: Any valid US postal code.

```typescript
import { postalRegex } from '@terminus/ngx-tools/regex';

postalRegex.test('12345-12'); // false
postalRegex.test('98765-4321'); // true
```


## Special Characters

[[source]](src/letters/special-characters.regex.ts)

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


## URL

[[source]](src/url/url.regex.ts)

`urlRegex`: Any valid URL (http/ftp/unicode/IP/etc).

```typescript
import { urlRegex } from '@terminus/ngx-tools/regex';

urlRegex.test('http://0.0.0.0'); // false
urlRegex.test('http://foo.com/blah_blah/'); // true
```

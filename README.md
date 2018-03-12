# @terminus/ngx-tools


[![CircleCI][circle-badge]][circle-link]
[![NPM version][npm-version-image]][npm-url]
[![Library size][file-size-badge]][raw-distribution-js]
[![semantic-release][semantic-release-badge]][semantic-release]
[![MIT License][license-image]][license-url]

A collection of tools and utilities for Terminus (Angular/NGRX) applications.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Basic Commands](#basic-commands)
- [Library Structure](#library-structure)
- [Features](#features)
  - [Basic Utilities](#basic-utilities)
  - [Regex](#regex)
  - [Test Helpers](#test-helpers)
  - [Key Codes](#key-codes)
  - [Coercion](#coercion)
- [Contributors](#contributors)
- [Resources](#resources)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Usage

1. Install: `yarn add @terminus/ngx-tools --exact`
1. Import: `import { debounce } from '@terminus/ngx-tools';`

> You can also play with the library live on StackBlitz:
> https://stackblitz.com/edit/angular-ngx-tools-starter

### Basic Commands

| Command                  | Function                                                      |
|--------------------------|---------------------------------------------------------------|
| `build:lib`     | Build release                                                 |
| `build:lib:sim` | Build release and start demo app in AoT                       |
| `test:lib`               | Run unit tests                                                |
| `test:lib:ci`            | Run unit tests and output coverage                            |
| `start:lib:sim`          | Build release and start demo app in JiT                       |
| `lib:sync`               | Sync configuration files (needed after any structural change) |
| `lint:lib`               | Lint TS files and attempt to fix issues                       |
| `lint:lib:ci`            | Lint TS files                                                 |

> See [package.json][package-json] for the full list of commands.


## Library Structure


| Import location                | Resources                                                                |
|--------------------------------|--------------------------------------------------------------------------|
| `@terminus/ngx-tools`          | Basic utilities (`debounce`, `groupBy`..)                                |
| `@terminus/ngx-tools/regex`    | Regex definitions (`creditCardRegex`, `emailRegex`..)                    |
| `@terminus/ngx-tools/testing`  | Test helpers and test mocks (`dispatchEvent`, `ElementRefMock`..)        |
| `@terminus/ngx-tools/coercion` | Functions to coerce values to specific types (`coerceBooleanProperty`..) |


## Features


### Basic Utilities

**Import from:** `@terminus/ngx-tools`

| Name                          | Description                                                         |
|-------------------------------|---------------------------------------------------------------------|
| `arrayContainsObject`         | Check if an object exists in an array                               |
| `controlHasRequiredField`     | Check if an `AbstractControl` has a required validator              |
| `debounce`                    | Provides a debounced function                                       |
| `groupBy`                     | Return an object containing arrays split by property                |
| `formGroupHasRequiredControl` | Check if a `FormGroup` contains a control with a required validator |
| `isArray`                     | Check if value is an Array                                          |
| `isBoolean`                   | Check if value is a Boolean                                         |
| `isFunction`                  | Check if value is a function                                        |
| `isObject`                    | Check if value is an Object                                         |
| `isString`                    | Check if value is a String                                          |
| `noop`                        | Placeholder function                                                |
| `retryWithBackoff`            | Helper to retry an Observable stream (x) times                      |

**Example:**

```typescript
import {
  groupBy,
  isArray,
} from '@terminus/ngx-tools';

const groupedArrays = groupBy(myArray, 'myProperty'); // {foo: [...], bar: [...]}
const isValidArray = isArray([]); // true
```


### Regex

**Import from:** `@terminus/ngx-tools/regex`

| Name              | Description                                                      |
|-------------------|------------------------------------------------------------------|
| `creditCardRegex` | Visa, MasterCard, American Express, Diners Club, Discover, JCB   |
| `emailRegex`      | Any valid email                                                  |
| `lettersRegex`    | Only English letters                                             |
| `numbersRegex`    | Only numbers                                                     |
| `passwordRegex`   | Between 6 and 100 characters, is a string, has at least 1 number |
| `phoneRegex`      | Any valid US phone number                                        |
| `postalRegex`     | Any valid US postal code                                         |
| `urlRegex`        | Any valid URL (http/ftp/unicode/IP/etc)                          |

**Example:**

```typescript
import { emailRegex } from '@terminus/ngx-tools/regex';

const isTrue = emailRegex.test('foo@bar.com');
```


### Test Helpers

**Import from:** `@terminus/ngx-tools/testing`

> **NOTE:** The three mocks currently do not work. They are currently being compiled during the
> build process.

| Name                    | Description                                                                                |
|-------------------------|--------------------------------------------------------------------------------------------|
| `ChangeDetectorRefMock` | A mock of the Angular `ChangeDetectorRefMock` class                                        |
| `createFakeEvent`       | Creates a fake event object with any desired event type                                    |
| `createKeyboardEvent`   | Dispatches a keydown event from an element                                                 |
| `createMouseEvent`      | Creates a browser MouseEvent with the specified options                                    |
| `createTouchEvent`      | Creates a browser TouchEvent with the specified pointer coordinates                        |
| `dispatchEvent`         | Utility to dispatch any event on a Node                                                    |
| `dispatchFakeEvent`     | Shorthand to dispatch a fake event on a specified node                                     |
| `dispatchKeyboardEvent` | Shorthand to dispatch a keyboard event with a specified key code                           |
| `dispatchMouseEvent`    | Shorthand to dispatch a mouse event on the specified coordinates                           |
| `dispatchTouchEvent`    | Shorthand to dispatch a touch event on the specified coordinates                           |
| `ElementRefMock`        | A mock of the Angular ElementRef class                                                     |
| `expectNativeEl`        | Reusable expect statement to check for the nativeElement                                   |
| `queryFor`              | Helper to query a fixture for a selector                                                   |
| `rendererMock`          | A mock of the Angular Renderer                                                             |
| `typeInElement`         | Focuses an input, sets it's value and dispatches the `input` event, simulating user typing |
| `wrappedErrorMessage`   | Gets a RegExp used to detect an angular wrapped error message                              |

**Example:**

```typescript
import { ElementRefMock } from '@terminus/ngx-tools/testing';
import { dispatchFakeEvent } from '@terminus/ngx-tools/testing';

this.directive = new MyDirective(
  new ElementRefMock(),
);

dispatchFakeEvent(window, 'resize')
```


### Key Codes

**Import from:** `@terminus/ngx-tools/keycodes`

| Name          | Description |
|---------------|-------------|
| `UP_ARROW`    | Key code    |
| `DOWN_ARROW`  | Key code    |
| `RIGHT_ARROW` | Key code    |
| `LEFT_ARROW`  | Key code    |
| `PAGE_UP`     | Key code    |
| `PAGE_DOWN`   | Key code    |
| `HOME`        | Key code    |
| `END`         | Key code    |
| `ENTER`       | Key code    |
| `SPACE`       | Key code    |
| `TAB`         | Key code    |
| `BACKSPACE`   | Key code    |
| `DELETE`      | Key code    |
| `A`           | Key code    |
| `Z`           | Key code    |
| `ZERO`        | Key code    |
| `NINE`        | Key code    |
| `COMMA`       | Key code    |

**Example:**

```typescript
import { DELETE } from '@terminus/ngx-tools/keycodes';

const isTrue = DELETE === 46;
```


### Coercion

**Import from:** `@terminus/ngx-tools/coercion`

| Name                    | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `coerceArray`           | Wraps the provided value in an array, unless the provided value is an array |
| `coerceBooleanProperty` | Coerces a data-bound value to a boolean                                     |
| `coerceNumberProperty`  | Coerces a data-bound value to a number                                      |

**Example:**

```typescript
import { coerceBooleanProperty } from '@terminus/ngx-tools/coercion';

const isTrue: boolean = coerceBooleanProperty('foo');
```



## Contributors

Thanks goes to these wonderful people ([emoji key][all-contributors-key]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/270193?v=4" width="100px;"/><br /><sub><b>Benjamin Charity</b></sub>](http://benjamincharity.com)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=benjamincharity "Code") [🔧](#tool-benjamincharity "Tools") [🤔](#ideas-benjamincharity "Ideas, Planning, & Feedback") [📖](https://github.com/GetTerminus/ngx-tools/commits?author=benjamincharity "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/19909708?v=4" width="100px;"/><br /><sub><b>Brian Malinconico</b></sub>](https://github.com/bmalinconico)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=bmalinconico "Code") [🤔](#ideas-bmalinconico "Ideas, Planning, & Feedback") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!


## Resources

- [Angular Library Starter][library-starter]
- [Semantic Release][semantic-release]
- [`ngx-tools` on unpkg][unpkg-tools]
- [Commitizen][commitizen]


## Contributing

See the development workflow for the `@terminus/ui` library: [Terminus Library Contribution Docs][dev-wiki]


<!-- LINKS -->
[circle-badge]: https://circleci.com/gh/GetTerminus/ngx-tools/tree/master.svg?style=shield
[circle-link]: https://circleci.com/gh/GetTerminus/ngx-tools/tree/master
[file-size-badge]: http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundle/ngx-tools.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ngx-tools/bundle/ngx-tools.umd.min.js
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]: https://github.com/semantic-release/semantic-release
[npm-url]: https://npmjs.org/package/@terminus/ngx-tools
[npm-version-image]: http://img.shields.io/npm/v/@terminus/ngx-tools.svg
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/GetTerminus/ngx-tools/blob/master/LICENSE
[library-starter]: https://github.com/shlomiassaf/angular-library-starter
[semantic-release]: https://github.com/semantic-release/semantic-release
[unpkg-tools]: https://unpkg.com/@terminus/ngx-tools/
[commitizen]: https://github.com/commitizen
[dev-wiki]: https://github.com/GetTerminus/terminus-ui/wiki/Development-Workflow
[package-json]: ./package.json

# @terminus/ngx-tools

[![CircleCI][circle-badge]][circle-link]
[![codecov][codecov-badge]][codecov-project]
[![semantic-release][semantic-release-badge]][semantic-release]
[![MIT License][license-image]][license-url]
<br>
[![NPM version][npm-version-image]][npm-url]
[![Github release][gh-release-badge]][gh-releases]

A collection of tools and utilities for Terminus applications.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
- [Library Structure](#library-structure)
- [Features](#features)
  - [NGRX Utilities](#ngrx-utilities)
    - [JWT Token Managment](#jwt-token-managment)
  - [Basic Utilities](#basic-utilities)
  - [Regex](#regex)
  - [Testing Utilities](#testing-utilities)
  - [Key Codes](#key-codes)
  - [Coercion](#coercion)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Basic Commands](#basic-commands)
- [Resources](#resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Usage

1. Install: `yarn add @terminus/ngx-tools`
1. Import: `import { debounce } from '@terminus/ngx-tools';`

> You can also play with the library live on StackBlitz:
> https://stackblitz.com/github/GetTerminus/ngx-tools


## Library Structure


| Import location                | Description                                               | Docs                      | Size                                           |
|:-------------------------------|:----------------------------------------------------------|:-------------------------:|:----------------------------------------------:|
| `@terminus/ngx-tools`          | Basic utilities (`debounce`, `groupBy`..)                 | [:books:][docs-utilities] | [![File size][fs-badge-utilities]][js-bundles] |
| `@terminus/ngx-tools/coercion` | Functions to coerce values to specific types  (`Array`..) | [:books:][docs-coercion]  | [![File size][fs-badge-coercion]][js-bundles]  |
| `@terminus/ngx-tools/keycodes` | Constants for commonly needed key codes (`ESC`..)         | [:books:][docs-keycodes]  | [![File size][fs-badge-keycodes]][js-bundles]  |
| `@terminus/ngx-tools/regex`    | Regex definitions (`creditCardRegex`..)                   | [:books:][docs-regex]     | [![File size][fs-badge-regex]][js-bundles]     |
| `@terminus/ngx-tools/testing`  | Test helpers and test mocks (`dispatchFakeEvent`..)       | [:books:][docs-testing]   | [![File size][fs-badge-testing]][js-bundles]   |


## Features

### NGRX Utilities

#### JWT Token Managment

Store, escalate, renew and use a named set of JWT tokens with ease!

[:books: Utilities Documentation](ngx-tools/src/jwt-token-managment/README.md)


### Basic Utilities

Import from: `@terminus/ngx-tools`

[:books: Utilities Documentation][docs-utilities]

```typescript
// Example usage:
import { isArray } from '@terminus/ngx-tools';

isArray([]); // Returns: true
```


### Regex

Import from: `@terminus/ngx-tools/regex`

[:books: RegEx Documentation][docs-regex]

```typescript
// Example usage:
import { emailRegex } from '@terminus/ngx-tools/regex';

emailRegex.test('foo@bar.com'); // Returns: true
```


### Testing Utilities

Import from: `@terminus/ngx-tools/testing`

[:books: Testing Documentation][docs-testing]

```typescript
// Example usage:
import { dispatchFakeEvent } from '@terminus/ngx-tools/testing';

dispatchFakeEvent(window, 'resize');
```


### Key Codes

Import from: `@terminus/ngx-tools/keycodes`

[:books: Key Code Documentation][docs-keycodes]

```typescript
// Example usage:
import { DELETE } from '@terminus/ngx-tools/keycodes';
import { dispatchKeyboardEvent } from '@terminus/ngx-tools/testing';

dispatchKeyboardEvent(myElementRef, 'keyup', DELETE);
```


### Coercion

Import from: `@terminus/ngx-tools/coercion`

[:books: Coercion Documentation][docs-coercion]

```typescript
// Example usage:
import { coerceBooleanProperty } from '@terminus/ngx-tools/coercion';

coerceBooleanProperty('true'); // Returns: true
```


## Contributing

See the development workflow for the `@terminus/ui` library: [Terminus Library Contribution Docs][contributing]


## Contributors

Thanks goes to these wonderful people ([emoji key][all-contributors-key]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/270193?v=4" width="100px;"/><br /><sub><b>Benjamin Charity</b></sub>](http://benjamincharity.com)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=benjamincharity "Code") [🔧](#tool-benjamincharity "Tools") [🤔](#ideas-benjamincharity "Ideas, Planning, & Feedback") [📖](https://github.com/GetTerminus/ngx-tools/commits?author=benjamincharity "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/19909708?v=4" width="100px;"/><br /><sub><b>Brian Malinconico</b></sub>](https://github.com/bmalinconico)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=bmalinconico "Code") [🤔](#ideas-bmalinconico "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/377552?v=4" width="100px;"/><br /><sub><b>Wendy</b></sub>](https://github.com/atlwendy)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=atlwendy "Code") [📖](https://github.com/GetTerminus/ngx-tools/commits?author=atlwendy "Documentation") [⚠️](https://github.com/GetTerminus/ngx-tools/commits?author=atlwendy "Tests") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!


## Basic Commands

| Command         | Function                                        |
|-----------------|-------------------------------------------------|
| `build`         | Build release                                   |
| `test`          | Run unit tests                                  |
| `test:ci:local` | Run unit tests and output coverage              |
| `start:app`     | Start demo project                              |
| `lint`          | Lint TS library files and attempt to fix issues |
| `lint:ci`       | Lint TS library files                           |
| `docs`          | Update library documentation                    |
| `cm`            | Commit with commitizen cli                      |

> See [package.json][package-json] for the full list of commands.


## Resources

- [Semantic Release][semantic-release]
- [`ngx-tools` on unpkg][unpkg-tools]
- [Commitizen][commitizen]




<!-- LINKS -->
[circle-badge]: https://circleci.com/gh/GetTerminus/ngx-tools/tree/release.svg?style=shield
[circle-link]: https://circleci.com/gh/GetTerminus/ngx-tools/tree/release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]: https://github.com/semantic-release/semantic-release
[npm-url]: https://npmjs.org/package/@terminus/ngx-tools
[npm-version-image]: http://img.shields.io/npm/v/@terminus/ngx-tools.svg
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/GetTerminus/ngx-tools/blob/release/LICENSE
[semantic-release]: https://github.com/semantic-release/semantic-release
[unpkg-tools]: https://unpkg.com/@terminus/ngx-tools/
[commitizen]: https://github.com/commitizen
[contributing]: https://github.com/GetTerminus/terminus-ui/blob/release/CONTRIBUTING.md
[package-json]: ./package.json
[gh-release-badge]: https://img.shields.io/github/release/GetTerminus/ngx-tools.svg
[gh-releases]: https://github.com/GetTerminus/ngx-tools/releases/
[codecov-badge]: https://codecov.io/gh/GetTerminus/ngx-tools/branch/release/graph/badge.svg
[codecov-project]: https://codecov.io/gh/GetTerminus/ngx-tools
[all-contributors-key]: https://github.com/kentcdodds/all-contributors#emoji-key

<!-- FILE SIZE -->
[fs-badge-utilities]: http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools.umd.min.js?compression=gzip
[fs-badge-regex]: http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-regex.umd.min.js?compression=gzip
[fs-badge-keycodes]: http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-keycodes.umd.min.js?compression=gzip
[fs-badge-testing]: http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-testing.umd.min.js?compression=gzip
[fs-badge-coercion]: http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-coercion.umd.min.js?compression=gzip
[js-bundles]: https://unpkg.com/@terminus/ngx-tools/bundles/

<!-- Docs -->
[docs-utilities]: ngx-tools/src/README.md
[docs-coercion]: ngx-tools/coercion/README.md
[docs-keycodes]: ngx-tools/keycodes/README.md
[docs-regex]: ngx-tools/regex/README.md
[docs-testing]: ngx-tools/testing/README.md

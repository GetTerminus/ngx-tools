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

- [Installation](#installation)
- [Library Structure](#library-structure)
- [Features](#features)
  - [Browser Utilities](#browser-utilities)
  - [Coercion](#coercion)
  - [JWT Token Managment](#jwt-token-managment)
  - [Key Codes](#key-codes)
  - [Regex](#regex)
  - [Testing Utilities](#testing-utilities)
  - [Type Guards](#type-guards)
  - [General Utilities](#general-utilities)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Basic Commands](#basic-commands)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

Install the library and required dependencies:

```bash
# Primary dependencies:
$ yarn add @terminus/ngx-tools

# Peer dependencies that need to be installed (you will likely already have some of these installed):
$ yarn add @angular/{core,common,forms,platform-browser} @ngrx/{effects,store} rxjs typescript@~3.4.5
```

Then import your item from the associated endpoint: `import { debounce } from '@terminus/ngx-tools/utilities';`

> You can play with the library live on StackBlitz:
> https://stackblitz.com/github/GetTerminus/ngx-tools


## Library Structure

| Import location                   | Description                                                   | Docs                        | Size                                             |
|:----------------------------------|:--------------------------------------------------------------|:---------------------------:|:------------------------------------------------:|
| `@terminus/ngx-tools/browser`     | Helpers to deal directly with browsers  (`TsCookieService`..) | [:books:][docs-browser]     | [![File size][fs-badge-browser]][js-bundles]     |
| `@terminus/ngx-tools/coercion`    | Functions to coerce values to specific types  (`Array`..)     | [:books:][docs-coercion]    | [![File size][fs-badge-coercion]][js-bundles]    |
| `@terminus/ngx-tools/jwt`         | Utilities for dealing with JWT tokens (`TokenEscalator`..)    | [:books:][docs-jwt]         | [![File size][fs-badge-jwt]][js-bundles]         |
| `@terminus/ngx-tools/keycodes`    | Constants for commonly needed key codes (`ESC`..)             | [:books:][docs-keycodes]    | [![File size][fs-badge-keycodes]][js-bundles]    |
| `@terminus/ngx-tools/regex`       | Regex definitions (`creditCardRegex`..)                       | [:books:][docs-regex]       | [![File size][fs-badge-regex]][js-bundles]       |
| `@terminus/ngx-tools/testing`     | Test helpers and test mocks (`dispatchFakeEvent`..)           | [:books:][docs-testing]     | [![File size][fs-badge-testing]][js-bundles]     |
| `@terminus/ngx-tools/type-guards` | TypeScript type guards (`isSet`, `isArray`..)                 | [:books:][docs-type-guards] | [![File size][fs-badge-type-guards]][js-bundles] |
| `@terminus/ngx-tools/utilities`   | Basic utilities (`debounce`, `groupBy`..)                     | [:books:][docs-utilities]   | [![File size][fs-badge-utilities]][js-bundles]   |


## Features


### Browser Utilities

Import from: `@terminus/ngx-tools/browser`

[:books: Browser Documentation][docs-browser]

```typescript
// Example usage:
import { TsCookieService } from '@terminus/ngx-tools/browser';

...

this.cookieService.set('myName', 'myValue'); // Sets a cookie
```


### Coercion

Import from: `@terminus/ngx-tools/coercion`

[:books: Coercion Documentation][docs-coercion]

```typescript
// Example usage:
import { coerceBooleanProperty } from '@terminus/ngx-tools/coercion';

coerceBooleanProperty('true'); // Returns: true
```


### JWT Token Managment

Store, escalate, renew and use a named set of JWT tokens with ease!

[:books: JWT Documentation][docs-jwt]


### Key Codes

Import from: `@terminus/ngx-tools/keycodes`

[:books: Key Codes Documentation][docs-keycodes]

```typescript
// Example usage:
import { KEYS } from '@terminus/ngx-tools/keycodes';
import { dispatchKeyboardEvent } from '@terminus/ngx-tools/testing';

KEYS.ENTER.code    // 'Enter'
KEYS.ENTER.keyCode // 13

// Example usage:
dispatchKeyboardEvent(myElementRef, KEYS.ENTER.keycode);
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


### Type Guards

Import from: `@terminus/ngx-tools/type-guards`

[:books: Type Guards Documentation][docs-type-guards]

```typescript
// Example usage:
import { arrayHasAllElementsSet } from '@terminus/ngx-tools/type-guards';

arrayHasAllElementsSet<string>(['foo', 'bar']) // Returns: true
arrayHasAllElementsSet<number>([1, 'bar'])     // Returns: false
```


### General Utilities

Import from: `@terminus/ngx-tools/utilities`

[:books: Utilities Documentation][docs-utilities]

```typescript
// Example usage:
import { groupBy } from '@terminus/ngx-tools/utilites';

groupBy<MyObj, keyof MyObj>(myArray, 'a');
```


## Contributing

See the development workflow for the `@terminus/ui` library: [Terminus Library Contribution Docs][contributing]


## Contributors

Thanks goes to these wonderful people ([emoji key][all-contributors-key]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/270193?v=4" width="100px;" alt="Benjamin Charity"/><br /><sub><b>Benjamin Charity</b></sub>](http://benjamincharity.com)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=benjamincharity "Code") [🔧](#tool-benjamincharity "Tools") [🤔](#ideas-benjamincharity "Ideas, Planning, & Feedback") [📖](https://github.com/GetTerminus/ngx-tools/commits?author=benjamincharity "Documentation") [💬](#question-benjamincharity "Answering Questions") [🐛](https://github.com/GetTerminus/ngx-tools/issues?q=author%3Abenjamincharity "Bug reports") [💡](#example-benjamincharity "Examples") [🚇](#infra-benjamincharity "Infrastructure (Hosting, Build-Tools, etc)") [🚧](#maintenance-benjamincharity "Maintenance") [👀](#review-benjamincharity "Reviewed Pull Requests") [⚠️](https://github.com/GetTerminus/ngx-tools/commits?author=benjamincharity "Tests") | [<img src="https://avatars0.githubusercontent.com/u/19909708?v=4" width="100px;" alt="Brian Malinconico"/><br /><sub><b>Brian Malinconico</b></sub>](https://github.com/bmalinconico)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=bmalinconico "Code") [🤔](#ideas-bmalinconico "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/377552?v=4" width="100px;" alt="Wendy"/><br /><sub><b>Wendy</b></sub>](https://github.com/atlwendy)<br />[💻](https://github.com/GetTerminus/ngx-tools/commits?author=atlwendy "Code") [📖](https://github.com/GetTerminus/ngx-tools/commits?author=atlwendy "Documentation") [⚠️](https://github.com/GetTerminus/ngx-tools/commits?author=atlwendy "Tests") [🚧](#maintenance-atlwendy "Maintenance") [👀](#review-atlwendy "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/44702601?v=4" width="100px;" alt="shani-terminus"/><br /><sub><b>shani-terminus</b></sub>](https://github.com/shani-terminus)<br />[🐛](https://github.com/GetTerminus/ngx-tools/issues?q=author%3Ashani-terminus "Bug reports") [💻](https://github.com/GetTerminus/ngx-tools/commits?author=shani-terminus "Code") [📖](https://github.com/GetTerminus/ngx-tools/commits?author=shani-terminus "Documentation") [🚧](#maintenance-shani-terminus "Maintenance") [⚠️](https://github.com/GetTerminus/ngx-tools/commits?author=shani-terminus "Tests") [👀](#review-shani-terminus "Reviewed Pull Requests") |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!


## Basic Commands

| Command         | Function                                         |
|-----------------|--------------------------------------------------|
| `build`         | Build release                                    |
| `test`          | Run unit tests                                   |
| `test:ci:local` | Run all unit tests and output coverage           |
| `start:app`     | Start demo project                               |
| `lint`          | Lint all library files and attempt to fix issues |
| `lint:ci`       | Lint all library files                           |
| `docs:toc`      | Update the Table of Contents in all files        |
| `cm`            | Commit with commitizen cli                       |

> See [package.json][package-json] for the full list of available commands.




<!-- LINKS -->
[circle-badge]:           https://circleci.com/gh/GetTerminus/ngx-tools/tree/release.svg?style=shield
[circle-link]:            https://circleci.com/gh/GetTerminus/ngx-tools/tree/release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]:       https://github.com/semantic-release/semantic-release
[npm-url]:                https://npmjs.org/package/@terminus/ngx-tools
[npm-version-image]:      http://img.shields.io/npm/v/@terminus/ngx-tools.svg
[license-image]:          http://img.shields.io/badge/license-MIT-blue.svg
[license-url]:            https://github.com/GetTerminus/ngx-tools/blob/release/LICENSE
[semantic-release]:       https://github.com/semantic-release/semantic-release
[contributing]:           https://github.com/GetTerminus/terminus-ui/blob/release/CONTRIBUTING.md
[package-json]:           ./package.json
[gh-release-badge]:       https://img.shields.io/github/release/GetTerminus/ngx-tools.svg
[gh-releases]:            https://github.com/GetTerminus/ngx-tools/releases/
[codecov-badge]:          https://codecov.io/gh/GetTerminus/ngx-tools/branch/release/graph/badge.svg
[codecov-project]:        https://codecov.io/gh/GetTerminus/ngx-tools
[all-contributors-key]:   https://github.com/kentcdodds/all-contributors#emoji-key

<!-- FILE SIZE -->
[fs-badge-browser]:     http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-browser.umd.min.js?compression=gzip
[fs-badge-coercion]:    http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-coercion.umd.min.js?compression=gzip
[fs-badge-jwt]:         http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-jwt.umd.min.js?compression=gzip
[fs-badge-keycodes]:    http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-keycodes.umd.min.js?compression=gzip
[fs-badge-regex]:       http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-regex.umd.min.js?compression=gzip
[fs-badge-testing]:     http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-testing.umd.min.js?compression=gzip
[fs-badge-type-guards]: http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-type-guards.umd.min.js?compression=gzip
[fs-badge-utilities]:   http://img.badgesize.io/https://unpkg.com/@terminus/ngx-tools/bundles/terminus-ngx-tools-utilities.umd.min.js?compression=gzip
[js-bundles]:           https://unpkg.com/@terminus/ngx-tools/bundles/

<!-- Docs -->
[docs-browser]:     ngx-tools/browser/README.md
[docs-coercion]:    ngx-tools/coercion/README.md
[docs-jwt]:         ngx-tools/jwt/README.md
[docs-keycodes]:    ngx-tools/keycodes/README.md
[docs-regex]:       ngx-tools/regex/README.md
[docs-testing]:     ngx-tools/testing/README.md
[docs-type-guards]: ngx-tools/type-guards/README.md
[docs-utilities]:   ngx-tools/utilities/README.md

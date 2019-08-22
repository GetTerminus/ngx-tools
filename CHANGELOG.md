## <small>7.2.2 (2019-08-22)</small>

* fix(Build): markdown ToCs updated during precommit ([251eebc](https://github.com/GetTerminus/ngx-tools/commit/251eebc)), closes [#318](https://github.com/GetTerminus/ngx-tools/issues/318)

## <small>7.2.1 (2019-08-08)</small>

* fix(Browser): refactor to support better typings ([7e6ac9d](https://github.com/GetTerminus/ngx-tools/commit/7e6ac9d))

## 7.2.0 (2019-08-08)

* chore(TypeGuards): missing JSDoc comments added ([7bae372](https://github.com/GetTerminus/ngx-tools/commit/7bae372))
* chore(CI): remove space in commit type ([2e8aac7](https://github.com/GetTerminus/ngx-tools/commit/2e8aac7))
* feat(TypeGuards): expose type guard for DragEvent ([7d83e4d](https://github.com/GetTerminus/ngx-tools/commit/7d83e4d))
* feat(TypeGuards): expose type guard for HTML input element ([a311a28](https://github.com/GetTerminus/ngx-tools/commit/a311a28))
* feat(TypeGuards): expose type guard for KeyboardEvent ([79029cd](https://github.com/GetTerminus/ngx-tools/commit/79029cd))
* feat(TypeGuards): expose type guard for MouseEvent ([0bfbe4a](https://github.com/GetTerminus/ngx-tools/commit/0bfbe4a))
* docs: enhance 7.1.0 release notes ([76a99fa](https://github.com/GetTerminus/ngx-tools/commit/76a99fa))

## 7.1.0 (2019-07-26)

* chore(CI): update allowed commit scopes ([4cd57cf](https://github.com/GetTerminus/ngx-tools/commit/4cd57cf))
* chore(Build): update tsconfig paths to solve TS missing deps ([3a839f7](https://github.com/GetTerminus/ngx-tools/commit/3a839f7))
* test(Utility): add missing test ([ee68d1b](https://github.com/GetTerminus/ngx-tools/commit/ee68d1b))
* test(Utility): update define type coverage for enums ([39afe71](https://github.com/GetTerminus/ngx-tools/commit/39afe71))
* feat: now supporting more custom endpoints ([017186c](https://github.com/GetTerminus/ngx-tools/commit/017186c))
  - JWT: Code moved to `@terminus/ngx-tools/jwt`
     - NOTE: JWT mocks still exist under `@terminus/ngx-tools/testing` but have been deprecated in favor of the mocks exposed in `@terminus/ngx-tools/jwt/testing`
  - TypeGuards: All type guards now exposed under `@terminus/ngx-tools/type-guards`
     - Also, a few new type guards have been added
  - Browser: All browser related code moved to `@terminus/ngx-tools/browser` (`TsCookieService`, `TsWindowService`, etc)
     - All browser related mocks still exist under `@terminus/ngx-tools/testing` but have been deprecated in favor of the mocks exposed in `@terminus/ngx-tools/browser/testing`
  - Utilities: All primary utilities moved to `@terminus/ngx-tools/utilities` (`debounce`, `hasRequiredControl`, etc)
  - Improved test coverage
  - Improved existing documentation and added missing documentation
  - Heavy internal reorganization

## <small>7.0.1 (2019-06-18)</small>

* fix(Packages): update inner package.json dependencies (#311) ([edc09a9](https://github.com/GetTerminus/ngx-tools/commit/edc09a9)), closes [#311](https://github.com/GetTerminus/ngx-tools/issues/311)
* docs: clarify needed versions ([06e66fd](https://github.com/GetTerminus/ngx-tools/commit/06e66fd))

## 7.0.0 (2019-06-13)

* chore(CI): doctoc now only running on needed files ([53eac45](https://github.com/GetTerminus/ngx-tools/commit/53eac45)), closes [#262](https://github.com/GetTerminus/ngx-tools/issues/262)
* chore(Packages): update all dependencies ([a07c1f0](https://github.com/GetTerminus/ngx-tools/commit/a07c1f0))
* chore(Packages): use new docker image ([6ef1688](https://github.com/GetTerminus/ngx-tools/commit/6ef1688))


### BREAKING CHANGE

* Now requires Angular `8.x.x` & TypeScript `~3.4.5`

## 6.11.0 (2019-05-28)

* style: fix lint violations ([beee1f7](https://github.com/GetTerminus/ngx-tools/commit/beee1f7))
* feat(Utility): expose UUID generator ([059ac30](https://github.com/GetTerminus/ngx-tools/commit/059ac30)), closes [#91](https://github.com/GetTerminus/ngx-tools/issues/91)
* chore: update core team contributions (#298) ([4e49ecb](https://github.com/GetTerminus/ngx-tools/commit/4e49ecb)), closes [#298](https://github.com/GetTerminus/ngx-tools/issues/298)

## 6.10.0 (2019-05-24)

* feat(Regex): expose UUID regex ([94baba6](https://github.com/GetTerminus/ngx-tools/commit/94baba6))
* refactor(CI): correctly excluding & including files for tsconfig.spec ([1979e37](https://github.com/GetTerminus/ngx-tools/commit/1979e37))
* refactor(Regex): move test values inside describe block ([848b5dd](https://github.com/GetTerminus/ngx-tools/commit/848b5dd))
* style(Utility): add missing end quote (#293) ([12a4205](https://github.com/GetTerminus/ngx-tools/commit/12a4205)), closes [#293](https://github.com/GetTerminus/ngx-tools/issues/293)
* chore: create persistant changelog ([6ff7cde](https://github.com/GetTerminus/ngx-tools/commit/6ff7cde)), closes [#273](https://github.com/GetTerminus/ngx-tools/issues/273)

## <small>6.9.0 (2019-05-13)</small>

* **Utility:** add helper to check if value is an AbstractControl ([fcb9bd0](https://github.com/GetTerminus/ngx-tools/commit/fcb9bd0))
* **Utility:** isArrayOfType is now available ([5bafd8c](https://github.com/GetTerminus/ngx-tools/commit/5bafd8c)), closes [#13](https://github.com/GetTerminus/ngx-tools/issues/13)


## <small>6.8.1 (2019-05-09)</small>

* **Utility:** fixes issue with AOT build failing to store initial token ([851fced](https://github.com/GetTerminus/ngx-tools/commit/851fced))

## <small>6.8.0 (2019-05-09)</small>

* **Utility:** isArrayOfType is now available ([1066e2e](https://github.com/GetTerminus/ngx-tools/commit/1066e2e)), closes [#13](https://github.com/GetTerminus/ngx-tools/issues/13)

## <small>6.7.0 (2019-05-01)</small>

* **Testing:** getDomAttribute is now available ([#283](https://github.com/GetTerminus/ngx-tools/issues/283)) ([b6c04c2](https://github.com/GetTerminus/ngx-tools/commit/b6c04c2)), closes [#240](https://github.com/GetTerminus/ngx-tools/issues/240)

## <small>6.6.1 (2019-04-26)</small>

* **Utility:** add missing exports for new utilities ([3c01b3b](https://github.com/GetTerminus/ngx-tools/commit/3c01b3b))

## <small>6.6.0 (2019-04-25)</small>

* **Utility:** `isNull`, `isSet`, `isUndefined`, `isUnset` are available ([#279](https://github.com/GetTerminus/ngx-tools/issues/279)) ([d1ec720](https://github.com/GetTerminus/ngx-tools/commit/d1ec720)), closes [#124](https://github.com/GetTerminus/ngx-tools/issues/124)

## <small>6.5.1 (2019-04-25)</small>

* **Keycodes:** remove deprecated event initializer and use initEvent ([#282](https://github.com/GetTerminus/ngx-tools/issues/282)) ([2d4a00b](https://github.com/GetTerminus/ngx-tools/commit/2d4a00b))

## <small>6.5.0 (2019-04-24)</small>

* **Keycodes:** add new keycodes ([da8f297](https://github.com/GetTerminus/ngx-tools/commit/da8f297))

## <small>6.4.1 (2019-04-24)</small>

* **Testing:** createKeyboardEvent initialization works with HostListener ([92e0b28](https://github.com/GetTerminus/ngx-tools/commit/92e0b28)), closes [#208](https://github.com/GetTerminus/ngx-tools/issues/208)

## <small>6.4.0 (2019-04-03)</small>

* **Utility:** defineTypeEnum edited and exported ([bf0ac48](https://github.com/GetTerminus/ngx-tools/commit/bf0ac48)), closes [#268](https://github.com/GetTerminus/ngx-tools/issues/268)

## <small>6.3.0 (2019-03-27)</small>

* **Utility:** publicShapeOf is now available ([2d5f3ef](https://github.com/GetTerminus/ngx-tools/commit/2d5f3ef))

## <small>6.2.0 (2019-03-20)</small>

* **Utility:** keycodes A-Z, and 0-9 are available ([b4a22d8](https://github.com/GetTerminus/ngx-tools/commit/b4a22d8)), closes [#247](https://github.com/GetTerminus/ngx-tools/issues/247)

## <small>6.1.0 (2019-02-21)</small>

* **Testing:** helper to quickly create a TestBed fixture from a single component ([d75921e](https://github.com/GetTerminus/ngx-tools/commit/d75921e)), closes [#249](https://github.com/GetTerminus/ngx-tools/issues/249)

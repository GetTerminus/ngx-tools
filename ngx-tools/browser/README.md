<h1>Browser</h1>

A collection of utilities for dealing directly with the browser.

**Import from:** `@terminus/ngx-tools/browser`


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Cookie Service](#cookie-service)
- [Document Service](#document-service)
- [`getDomAttribute`](#getdomattribute)
- [Window Service](#window-service)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Cookie Service

[[source]](src/cookies/cookie.service.ts)

An injectable Angular service that provides control over a browser cookie.

```typescript
import { TsCookieService } from '@terminus/ngx-tools/browser';

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

> Note: This service was based off of [ngx-cookie-service] which in turn was
> based off of [ng2-cookies].


## Document Service

[[source]](src/document/document.service.ts)

An injectable Angular service that provides access to the Document object.

```typescript
import { TsDocumentService } from '@terminus/ngx-tools/browser';

@Component({...})
export class MyComponent implements OnInit {

  constructor(private documentService: TsDocumentService) {}

  public ngOnInit(): void {
    console.log('Document object: ', this.documentService.document);
  }
}
```

> A mock of this service is available via the testing module:
> `import { TsDocumentServiceMock } from '@terminus/ngx-tools/testing';`
> See: [:books: Testing Helper Documentation][docs-testing] for more information.


## `getDomAttribute`

[[source]](src/get-dom-attribute/get-dom-attribute.ts)

A helper to return the value of a DOM attribute.

```typescript
import { getDomAttribute } from '@terminus/ngx-tools/browser';

getDomAttribute(myElement, 'aria-label');
```


## Window Service

[[source]](src/window/window.service.ts)

An injectable Angular service that provides access to the global Window object.

```typescript
import { TsWindowService } from '@terminus/ngx-tools/browser';

@Component({...})
export class MyComponent implements OnInit {

  constructor(private windowService: TsWindowService) {}

  public ngOnInit(): void {
    console.log('Window object: ', this.windowService.nativeWindow);
  }
}
```

> A mock of this service is available via the testing module:
> `import { TsWindowServiceMock } from '@terminus/ngx-tools/testing';`
> See: [:books: Testing Helper Documentation][docs-testing] for more information.




<!-- LINKS -->
[docs-testing]:       https://github.com/GetTerminus/ngx-tools/tree/release/ngx-tools/testing/README.md
[ngx-cookie-service]: https://github.com/7leads/ngx-cookie-service
[ng2-cookies]:        https://github.com/BCJTI/ng2-cookies

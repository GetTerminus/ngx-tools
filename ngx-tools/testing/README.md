<h1>Testing Utilities</h1>

**Import from:** `@terminus/ngx-tools/testing`

```typescript
// Example usage:
import { dispatchFakeEvent } from '@terminus/ngx-tools/testing';

dispatchFakeEvent(window, 'resize')
```


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Mocks](#mocks)
  - [`ChangeDetectorRefMock`](#changedetectorrefmock)
  - [`ElementRefMock`](#elementrefmock)
  - [`rendererMock`](#renderermock)
  - [`TsDocumentServiceMock`](#tsdocumentservicemock)
  - [`TsWindowServiceMock`](#tswindowservicemock)
- [Event Objects](#event-objects)
  - [`createFakeEvent`](#createfakeevent)
  - [`createKeyboardEvent`](#createkeyboardevent)
  - [`createMouseEvent`](#createmouseevent)
  - [`createTouchEvent`](#createtouchevent)
- [Dispatch Events](#dispatch-events)
  - [`dispatchEvent`](#dispatchevent)
  - [`dispatchFakeEvent`](#dispatchfakeevent)
  - [`dispatchKeyboardEvent`](#dispatchkeyboardevent)
  - [`dispatchMouseEvent`](#dispatchmouseevent)
  - [`dispatchTouchEvent`](#dispatchtouchevent)
- [Angular Test Helpers](#angular-test-helpers)
  - [`configureTestBed`](#configuretestbed)
  - [`expectNativeEl`](#expectnativeel)
  - [`queryFor`](#queryfor)
  - [`typeInElement`](#typeinelement)
  - [`wrappedErrorMessage`](#wrappederrormessage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Mocks

### `ChangeDetectorRefMock`

A mock of the Angular `ChangeDetectorRefMock` class.

```typescript
// my.component.ts
import { ChangeDetectorRef } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { ChangeDetectorRefMock } from '@terminus/ngx-tools/testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new ChangeDetectorRefMock(),
  );
});
```


### `ElementRefMock`

A mock of the Angular `ElementRef` class.

```typescript
// my.component.ts
import { ElementRef } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(
    private elementRef: ElementRef,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { ElementRefMock } from '@terminus/ngx-tools/testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new ElementRefMock(),
  );
});
```


### `rendererMock`

A mock of the Angular Renderer.

```typescript
// my.component.ts
import { Renderer } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(
    private renderer: Renderer,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { rendererMock } from '@terminus/ngx-tools/testing';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      MyNeededModule,
    ],
    providers: [
      {
        provide: Renderer,
        useValue: rendererMock,
      },
    ],
    declarations: [
      MyComponent,
    ],
  }).compileComponents();
}));
```


### `TsDocumentServiceMock`

```typescript
// my.component.ts
import { TsDocumentService } from '@terminus/ngx-tools';

@Component({...})
export class MyComponent {
  constructor(
    private documentService: TsDocumentService,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { TsDocumentServiceMock } from '@terminus/ngx-tools/testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new TsDocumentServiceMock(),
  );
});
```


### `TsWindowServiceMock`

```typescript
// my.component.ts
import { TsWindowService } from '@terminus/ngx-tools';

@Component({...})
export class MyComponent {
  constructor(
    private windowService: TsWindowService,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { TsWindowServiceMock } from '@terminus/ngx-tools/testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new TsWindowServiceMock(),
  );
});
```


## Event Objects

> For more complex examples, [search for the function in question within `@angular/material`][material-search].

### `createFakeEvent`

Creates a fake event object with any desired event type.

```typescript
import { createFakeEvent } from '@terminus/ngx-tools/testing';

const focusEvent = createFakeEvent('focus');
```

| Param        | Type      | Default |
|--------------|-----------|---------|
| `type`       | `string`  |         |
| `canBubble`  | `boolean` | `true`  |
| `cancelable` | `boolean` | `true`  |


### `createKeyboardEvent`

Creates a browser `KeyboardEvent` from an element.

```typescript
import { ENTER } from '@terminus/ngx-tools/keycodes';
import { createKeyboardEvent } from '@terminus/ngx-tools/testing';

const keyboardEvent = createKeyboardEvent('keydown', ENTER, myInputNativeElement);
```

| Param     | Type      | Default |
|-----------|-----------|---------|
| `type`    | `string`  |         |
| `keyCode` | `number`  |         |
| `target?` | `Element` |         |
| `key?`    | `string`  |         |


### `createMouseEvent`

Creates a browser `MouseEvent` with the specified options.

```typescript
import { createMouseEvent } from '@terminus/ngx-tools/testing';

const mouseEvent = createMouseEvent('click');
const mouseEventAtLocation = createMouseEvent('click', 212, 433);
```

| Param  | Type     | Default |
|--------|----------|---------|
| `type` | `string` |         |
| `x`    | `number` | 0       |
| `y`    | `number` | 0       |


### `createTouchEvent`

Creates a browser `TouchEvent` with the specified pointer coordinates.

```typescript
import { createTouchEvent } from '@terminus/ngx-tools/testing';

const touchEvent = createTouchEvent('touchstart');
const touchEventAtLocation = createTouchEvent('touchstart', 212, 433);
```

| Param   | Type     | Default |
|---------|----------|---------|
| `type`  | `string` |         |
| `pageX` | `number` | 0       |
| `pageY` | `number` | 0       |


## Dispatch Events

> For more complex examples, [search for the function in question within `@angular/material`][material-search].

### `dispatchEvent`

Utility to dispatch any event on a Node.

```typescript
import { dispatchEvent } from '@terminus/ngx-tools/testing';

dispatchEvent(myNativeElement, 'blur');
```

| Param   | Type                 | Default |
|---------|----------------------|---------|
| `node`  | `Node`&#124;`Window` |         |
| `event` | `Event`              |         |


### `dispatchFakeEvent`

Shorthand to dispatch a fake event on a specified node.

```typescript
import { dispatchFakeEvent } from '@terminus/ngx-tools/testing';

dispatchFakeEvent(myNativeElement, 'mousedown');
```

| Param        | Type                 | Default |
|--------------|----------------------|---------|
| `node`       | `Node`&#124;`Window` |         |
| `type`       | `string`             |         |
| `canBubble?` | `boolean`            |         |


### `dispatchKeyboardEvent`

Shorthand to dispatch a keyboard event with a specified key code.

```typescript
import { dispatchKeyboardEvent } from '@terminus/ngx-tools/testing';

dispatchKeyboardEvent(myNativeElement, 'keyup', ENTER);
```

| Param     | Type      | Default |
|-----------|-----------|---------|
| `node`    | `Node`    |         |
| `type`    | `string`  |         |
| `keyCode` | `number`  |         |
| `target?` | `Element` |         |


### `dispatchMouseEvent`

Shorthand to dispatch a mouse event on the specified coordinates.

```typescript
import { dispatchMouseEvent } from '@terminus/ngx-tools/testing';

dispatchMouseEvent(myNativeElement, 'mousedown');
```

| Param   | Type         | Default                        |
|---------|--------------|--------------------------------|
| `node`  | `Node`       |                                |
| `type`  | `string`     |                                |
| `x`     | `number`     | 0                              |
| `y`     | `number`     | 0                              |
| `event` | `MouseEvent` | `createMouseEvent(type, x, y)` |


### `dispatchTouchEvent`

Shorthand to dispatch a touch event on the specified coordinates.

```typescript
import { dispatchTouchEvent } from '@terminus/ngx-tools/testing';

dispatchTouchEvent(myNativeElement, 'touchstart');
```

| Param  | Type     | Default |
|--------|----------|---------|
| `node` | `Node`   |         |
| `type` | `string` |         |
| `x`    | `number` | 0       |
| `y`    | `number` | 0       |


## Angular Test Helpers


### `configureTestBed`

By default, Angular does not strip out any white space when compiling templates for the `TestBed`. This
can make snapshot testing more difficult to visually parse. This helper will configure the `TestBed`
and compile the components with extra white space stripped.

```typescript
import {
  ConfigureTestBedFn,
  configureTestBed,
} from '@terminus/ngx-tools/testing';

describe(`MyComponentSnapshot`, () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;

  beforeEach(async(() => {
    // Define your configuration just as you would using the standard TestBed,
    // except now it's inside a `ConfigureTestBedFn` function:
    const configure: ConfigureTestBedFn = (testBed) => {
      testBed.configureTestingModule({
        ...
        declarations: [
          TsCopyComponent,
        ],
        ...
      });
    };

    // Pass the configuration in and receive a TestBed instance:
    configureTestBed(configure).then((testBed) => {
      fixture = testBed.createComponent(MyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  }));


  test(`should match the snapshot`, () => {
    expect(fixture).toMatchSnapshot();
  });

});
```


### `expectNativeEl`

Reusable expect statement to check for the `nativeElement`.

```typescript
import { expectNativeEl } from '@terminus/ngx-tools/testing';

let fixture: ComponentFixture<TestHostComponent>;
let testHost: TestHostComponent;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [...],
    declarations: [
      MyComponent,
      TestHostComponent,
    ],
    providers: [...],
  }).compileComponents();

  fixture = TestBed.createComponent(TestHostComponent);
  testHost = fixture.componentInstance;
  fixture.detectChanges();
}));

it(`should have a native element`, () => {
  expectNativeEl(fixture).toBeTruthy();
})
```

### `queryFor`

Helper to query a fixture for a selector.

```typescript
import { queryFor } from '@terminus/ngx-tools/testing';

let fixture: ComponentFixture<TestHostComponent>;
let testHost: TestHostComponent;
let nestedElement;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [...],
    declarations: [
      MyComponent,
      TestHostComponent,
    ],
    providers: [...],
  }).compileComponents();

  fixture = TestBed.createComponent(TestHostComponent);
  testHost = fixture.componentInstance;
  fixture.detectChanges();

  nestedElement = queryFor(fixture, '.my-class');
}));
```


### `typeInElement`

Focuses an input, sets it's value and dispatches the `input` event, simulating user typing.

```typescript
import { typeInElement } from '@terminus/ngx-tools/testing';

typeInElement('test@test.com', myEmailInputElement);
```

### `wrappedErrorMessage`

Gets a RegExp used to detect an Angular wrapped error message. This allows testing for specific
thrown errors in tests.

```typescript
import { wrappedErrorMessage } from '@terminus/ngx-tools/testing';

expect(myFunc).toThrowError(wrappedErrorMessage(mySpecificError()));
```

> See https://github.com/angular/angular/issues/8348 for more information.




<!-- LINKS -->
[material-search]: https://github.com/angular/material2/search

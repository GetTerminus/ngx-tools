<h1>Testing Utilities</h1>

A collection of helpers to facilitate testing UI components.

**Import from:** `@terminus/ngx-tools/testing`


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Mocks](#mocks)
  - [`ChangeDetectorRefMock`](#changedetectorrefmock)
  - [`ElementRefMock`](#elementrefmock)
  - [`rendererMock`](#renderermock)
  - [`renderer2Mock`](#renderer2mock)
  - [`TokenEscalatorMock`](#tokenescalatormock)
  - [`TokenExtractorMock`](#tokenextractormock)
  - [`TsDocumentServiceMock`](#tsdocumentservicemock)
  - [`TsWindowServiceMock`](#tswindowservicemock)
- [Events](#events)
  - [Creating Events](#creating-events)
    - [`createFakeEvent`](#createfakeevent)
    - [`createKeyboardEvent`](#createkeyboardevent)
    - [`createMouseEvent`](#createmouseevent)
    - [`createTouchEvent`](#createtouchevent)
  - [Dispatching Events](#dispatching-events)
    - [`dispatchEvent`](#dispatchevent)
    - [`dispatchFakeEvent`](#dispatchfakeevent)
    - [`dispatchKeyboardEvent`](#dispatchkeyboardevent)
    - [`dispatchMouseEvent`](#dispatchmouseevent)
    - [`dispatchTouchEvent`](#dispatchtouchevent)
- [Angular Test Helpers](#angular-test-helpers)
  - [`configureTestBedWhitespace`](#configuretestbedwhitespace)
  - [`configureTestBedWithoutReset`](#configuretestbedwithoutreset)
  - [`createComponent`](#createcomponent)
  - [`expectNativeEl`](#expectnativeel)
  - [`getChildComponentInstanceFromFixture`](#getchildcomponentinstancefromfixture)
  - [`queryFor`](#queryfor)
  - [`wrappedErrorMessage`](#wrappederrormessage)
- [`typeInElement`](#typeinelement)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Mocks

### `ChangeDetectorRefMock`

[[source]](src/mocks/change-detector-ref.mock.ts)

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

[[source]](src/mocks/elementRef.mock.ts)

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

[[source]](src/mocks/renderer.mock.ts)

A mock of the Angular Renderer with properties initialized with `noop` function.

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
      // rendererMock is a value:
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

### `renderer2Mock`

[[source]](src/mocks/renderer2.mock.ts)

A mock of the Angular Renderer2 with all properties stubbed.

```typescript
// my.component.ts
import { Renderer2 } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(
    private renderer2: Renderer2,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { Renderer2Mock } from '@terminus/ngx-tools/testing';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    ...
    providers: [
      // Renderer2Mock is a class:
      {
        provide: Renderer,
        useClass: Renderer2Mock,
      },
    ],
    declarations: [
      MyComponent,
    ],
  }).compileComponents();
}));
```

Or for `new`ed classes:

```typescript
import { Renderer2Mock } from '@terminus/ngx-tools/testing';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new Renderer2Mock(),
  );
});
```

### `TokenEscalatorMock`

[[source]](src/mocks/token-escalator.mock.ts)

TODO <!-- https://github.com/GetTerminus/ngx-tools/issues/317 -->


### `TokenExtractorMock`

[[source]](src/mocks/token-extractor.mock.ts)

TODO <!-- https://github.com/GetTerminus/ngx-tools/issues/317 -->


### `TsDocumentServiceMock`

[[source]](src/mocks/document.service.mock.ts)

```typescript
// my.component.ts
import { TsDocumentService } from '@terminus/ngx-tools/browser';

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

[[source]](src/mocks/window.service.mock.ts)

```typescript
// my.component.ts
import { TsWindowService } from '@terminus/ngx-tools/browser';

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


## Events

### Creating Events

#### `createFakeEvent`

[[source]](src/utilities/events/create-fake-event.ts)

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


#### `createKeyboardEvent`

[[source]](src/utilities/events/create-keyboard-event.ts)

Creates a browser `KeyboardEvent` from an element.

```typescript
import { KEYCODES } from '@terminus/ngx-tools/keycodes';
import { createKeyboardEvent } from '@terminus/ngx-tools/testing';

const keyboardEvent = createKeyboardEvent('keydown', KEYCODES.ENTER.keyCode, myInputNativeElement);
```

| Param     | Type      | Default |
|-----------|-----------|---------|
| `type`    | `string`  |         |
| `keyCode` | `number`  |         |
| `target?` | `Element` |         |
| `key?`    | `string`  |         |


#### `createMouseEvent`

[[source]](src/utilities/events/create-mouse-event.ts)

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


#### `createTouchEvent`

[[source]](src/utilities/events/create-touch-event.ts)

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


### Dispatching Events

#### `dispatchEvent`

[[source]](src/utilities/events/dispatch-event.ts)

Utility to dispatch any event on a Node.

```typescript
import { dispatchEvent } from '@terminus/ngx-tools/testing';

dispatchEvent(myNativeElement, 'blur');
```

| Param   | Type                 | Default |
|---------|----------------------|---------|
| `node`  | `Node`&#124;`Window` |         |
| `event` | `Event`              |         |


#### `dispatchFakeEvent`

[[source]](src/utilities/events/dispatch-fake-event.ts)

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


#### `dispatchKeyboardEvent`

[[source]](src/utilities/events/dispatch-keyboard-event.ts)

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


#### `dispatchMouseEvent`

[[source]](src/utilities/events/dispatch-mouse-event.ts)

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


#### `dispatchTouchEvent`

[[source]](src/utilities/events/dispatch-touch-event.ts)

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

### `configureTestBedWhitespace`

[[source]](src/utilities/configure-testbed-whitespace.ts)

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
          MyComponent,
        ],
        ...
      });
    };

    // Pass the configuration in and receive a TestBed instance:
    configureTestBedWhitespace(configure).then((testBed) => {
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


### `configureTestBedWithoutReset`

[[source]](src/utilities/configure-testbed-without-reset.ts)

By default, Angular resets the `TestBed` between each test. While this can be useful if
components or services have shared state or create side-effects, it can slow down tests quite a bit.
When the `TestBed` doesn't need to be reset, we can improve testing time by disabling this reset
functionality.

> NOTE: This function makes use of `beforeAll` and `afterAll` so it must be called inside your
> outermost `describe` block.

```typescript
import { TestModuleMetadata } from '@angular/core/testing';
import { configureTestBedWithoutReset } from '@terminus/ngx-tools/testing';

describe(`MyComponent`, () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;
  const moduleDefinition: TestModuleMetadata = {
    imports: [
      ...
    ],
    declarations: [
      ...
    ],
  };

  setUpTestBed(moduleDefinition);

  it(`should...`, () => {
    ...
  });
});
```


### `createComponent`

[[source]](src/utilities/create-component.ts)

Helper function to quickly generate a `TestBed` fixture with a single component.

```typescript
import { createComponent } from '@terminus/ngx-tools/testing';

@Component({template: ``})
export class TestComponent {
  foo = 'bar';
}

test(`should do something`, () => {
  const fixture = createComponent<TestComponent>(TestComponent);

  expect(fixture.componentInstance.foo).toEqual('bar');
});
```


### `expectNativeEl`

[[source]](src/utilities/expect-native-el.ts)

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


### `getChildComponentInstanceFromFixture`

[[source]](src/utilities/get-child-component-instance-from-fixture.ts)

Returns a component instance from a TestBed fixture:

```typescript
import { getChildComponentInstanceFromFixture } from '@terminus/ngx-tools/testing';
import { Component } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';


// The component we will want a reference too:
@Component({
  selector: `my-test`,
  template: `<h1>foo</h1>`,
})
class TestComponent {
  myString = 'foo';
}

// The parent component (fixture):
@Component({
  template: `<my-test></my-test>`,
})
class TestHostComponent {}


describe(`my test`, () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TestHostComponent,
      ],
    });

    // Create the fixture:
    fixture = TestBed.createComponent(TestHostComponent);
  });


  test(`should ...`, () => {
    // Get the instance:
    const instance: TestComponent = getChildComponentInstanceFromFixture(fixture, TestComponent);
    console.log(instance.myString); // logs out: `foo`
  });

});
```


### `queryFor`

[[source]](src/utilities/query-for.ts)

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


### `wrappedErrorMessage`

[[source]](src/utilities/wrapped-error-message.ts)

Gets a RegExp used to detect an Angular wrapped error message. This allows testing for specific
thrown errors in tests.

```typescript
import { wrappedErrorMessage } from '@terminus/ngx-tools/testing';

expect(myFunc).toThrowError(wrappedErrorMessage(mySpecificError()));
```

> See https://github.com/angular/angular/issues/8348 for more information.


## `typeInElement`

[[source]](src/utilities/type-in-element.ts)

Focuses an input, sets it's value and dispatches the `input` event, simulating user typing.

```typescript
import { typeInElement } from '@terminus/ngx-tools/testing';

typeInElement('test@test.com', myEmailInputElement);
```

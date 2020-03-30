import { HttpClientModule } from '@angular/common/http';
import {
  TestBed,
  async,
} from '@angular/core/testing';
import {
  TsWindowService,
  TsDocumentService,
} from '@terminus/ngx-tools/browser';
import {
  TsWindowServiceMock,
  TsDocumentServiceMock,
} from '@terminus/ngx-tools/browser/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        {
          provide: TsWindowService,
          useClass: TsWindowServiceMock,
        },
        {
          provide: TsDocumentService,
          useClass: TsDocumentServiceMock,
        },
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  test('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

describe(`test block`, () => {
  test(`should do something`, () => {
    expect(true).toEqual(true);
  });
});

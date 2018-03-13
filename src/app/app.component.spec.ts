/*
 *import {
 *  TestBed,
 *  async,
 *} from '@angular/core/testing';
 *import {
 *  TsWindowService,
 *  TsDocumentService,
 *} from '@terminus/ngx-tools';
 *import {
 *  TsWindowServiceMock,
 *  TsDocumentServiceMock,
 *} from '@terminus/ngx-tools/testing';
 *
 *import { AppComponent } from './app.component';
 *
 *
 *describe('AppComponent', () => {
 *
 *  beforeEach(async(() => {
 *    TestBed.configureTestingModule({
 *      imports: [
 *        {
 *          provide: TsWindowService,
 *          useClass: TsWindowServiceMock,
 *        },
 *        {
 *          provide: TsDocumentService,
 *          useClass: TsDocumentServiceMock,
 *        },
 *      ],
 *      declarations: [
 *        AppComponent,
 *      ],
 *    }).compileComponents();
 *  }));
 *
 *
 *  it('should create the app', async(() => {
 *    const fixture = TestBed.createComponent(AppComponent);
 *    const app = fixture.debugElement.componentInstance;
 *    expect(app).toBeTruthy();
 *  }));
 *
 *});
 */

describe(`test block`, () => {

  it(`should do something`, () => {
    expect(true).toEqual(true);
  });

});

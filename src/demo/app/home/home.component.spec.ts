import {
  inject,
  async,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';
import { TsWindowService, TsDocumentService } from '@terminus/ngx-tools';
import { TsWindowServiceMock, TsDocumentServiceMock } from '@terminus/ngx-tools/testing';

import { HomeComponent } from './home.component';




describe(`HomeComponent`, () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
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
    });
    this.fixture = TestBed.createComponent(HomeComponent);
    this.comp = this.fixture.componentInstance;
    this.fixture.detectChanges();
  }));


  it(`should work`, () => {
    console.log('in test: ', this.comp.window)
    expect(true).toEqual(false);
  });

});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  TsWindowService,
  ENV,
  TsDocumentService,
} from '@terminus/ngx-tools';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as myEnv from 'environment.json';
import { AppComponent } from './app.component';


export function envFactory() {
  return new BehaviorSubject<any>(myEnv);
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TsWindowService,
    TsDocumentService,
    {
      provide: ENV,
      useFactory: envFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

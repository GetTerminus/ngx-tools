import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  TsWindowService,
  TsDocumentService,
} from '@terminus/ngx-tools';

import { AppComponent } from './app.component';


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
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

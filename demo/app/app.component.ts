/* eslint-disable no-console */
import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { VERSION } from '@terminus/ngx-tools';
console.log('ngx-tools VERSION: ', VERSION);


@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public version: string = VERSION.full;

  public ngOnInit() {
    console.log('AppComponent: ngOnInit');
  }
}

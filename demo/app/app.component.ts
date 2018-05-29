import {
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { VERSION } from '@terminus/ngx-tools';
console.log('ngx-tools VERSION: ', VERSION);


@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  version: string = VERSION.full;

  public ngOnInit() {
    console.log('AppComponent: ngOnInit');
  }
}

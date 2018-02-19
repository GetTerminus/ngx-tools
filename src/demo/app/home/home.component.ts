import {
  Component,
  OnInit,
} from '@angular/core';

import { VERSION } from '@terminus/ngx-tools';
console.log('VERSION: ', VERSION)

/*
 *import { debounce } from '@terminus/ngx-tools';
 *console.log('debounce: ', debounce);
 *
 *import { emailRegex } from '@terminus/ngx-tools/regex';
 *console.log('emailRegex: ', emailRegex);
 *
 *import { ElementRefMock } from '@terminus/ngx-tools/testing';
 *console.log('ElementRefMock: ', ElementRefMock);
 *
 *import { ZERO } from '@terminus/ngx-tools/keycodes';
 *console.log('ZERO: ', ZERO);
 *
 *import { coerceBooleanProperty } from '@terminus/ngx-tools/coercion';
 *console.log('coerceBooleanProperty: ', coerceBooleanProperty(''));
 */


import { AppState } from '../app.service';


// tslint:disable: component-selector
@Component({
  selector: 'home',
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  value: number;

  /**
   * Set our default values
   */
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}

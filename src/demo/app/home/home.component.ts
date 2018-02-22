import {
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


/*
 *import { VERSION } from '@terminus/ngx-tools';
 *console.log('VERSION: ', VERSION)
 */

import {
  retryWithBackoff,
  exponentialBackoffDelayCalculator,
  DelayCalculator,
  TsWindowService,
  TsDocumentService,
} from '@terminus/ngx-tools';

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




// tslint:disable: component-selector
@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  value: number;
  exampleDatabase: ExampleHttpDao | null;
  issues$: any;
  totalCount: number;
  window: any;
  document: any;

  constructor(
    private http: HttpClient,
    private windowService: TsWindowService,
    private documentService: TsDocumentService,
  ) {
    this.window = this.windowService.nativeWindow;
    this.document = this.documentService.document;
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    const seenValues: {[idx: number]: number} = {}
    const linearBackoff = (attempt: number) => 1;
    this.exampleDatabase = new ExampleHttpDao(this.http);

    console.log('this.document: ', this.document)

    this.issues$ = this.getIssues();

    this.issues$.subscribe((v: any) => {
      this.totalCount = v.total_count;
    })

  }


  public getIssues(): Observable<GithubApi | null> {
    const calcOpts: DelayCalculator = {
      jitter: true,
      jitterFactor: .3,
      backOffFactor: 2,
      baseWaitTime: 100,
    }

    return this.exampleDatabase.getRepoIssues()
      .pipe(
        map((res: GithubApi) => {
          if (res) {
            console.log('getIssues: res: ', res)
            return res;

          } else {
            console.log('getIssues: no res')
            return null;
          }
        }),
        retryWithBackoff({retries: 3, delayCalculator: exponentialBackoffDelayCalculator(calcOpts)}),
      )
    ;
  }

}


export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/**
 * An example database that the data source uses to retrieve data for the table.
 */
export class ExampleHttpDao {
  tries: number = 0;

  constructor(private http: HttpClient) {}

  getRepoIssues(): any {
    const href = 'https://api.github.com/search/issues?q=repo:GetTerminus/terminus-ui';
    this.tries = 0;
    return this.http.get<GithubApi>(`${href}`)
      .pipe(
        map((i) => {
          console.log('in API: this.tries: ', this.tries)
          this.tries++;
          if (this.tries < 3) {
            throw new Error('no soup for you');
          }
          return i
        }),
      );
  }
}

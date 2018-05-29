import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { interval } from 'rxjs';

import { untilComponentDestroyed } from '@terminus/ngx-tools';


@Component({
  selector: 'demo-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit, OnDestroy {

  public ngOnInit() {
    console.log('CHILD: ngOnInit');

    interval(1000).pipe(untilComponentDestroyed(this)).subscribe(console.log);
  }

  public ngOnDestroy() {
    console.log('CHILD: ngOnDestroy!');
  }

}

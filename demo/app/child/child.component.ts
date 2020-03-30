import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { untilComponentDestroyed } from '@terminus/ngx-tools/utilities';
import { interval } from 'rxjs';


@Component({
  selector: 'demo-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit, OnDestroy {

  public ngOnInit(): void {
    console.log('CHILD: ngOnInit');
    const WAIT = 1000;
    interval(WAIT).pipe(untilComponentDestroyed(this)).subscribe(console.log);
  }

  public ngOnDestroy(): void {
    console.log('CHILD: ngOnDestroy!');
  }

}

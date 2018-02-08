import { Injectable } from '@angular/core';


/**
 * A mock of the Angular ChangeDetectorRefMock class
 */
@Injectable()
export class ChangeDetectorRefMock {
  markForCheck = () => {};
  detach = () => {};
  detectChanges = () => {};
  checkNoChanges = () => {};
  reattach = () => {};
}

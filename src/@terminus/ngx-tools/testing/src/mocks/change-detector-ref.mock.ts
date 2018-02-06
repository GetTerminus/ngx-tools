import { Injectable } from '@angular/core';


@Injectable()
export class ChangeDetectorRefMock {
  markForCheck = () => {};
  detach = () => {};
  detectChanges = () => {};
  checkNoChanges = () => {};
  reattach = () => {};
}

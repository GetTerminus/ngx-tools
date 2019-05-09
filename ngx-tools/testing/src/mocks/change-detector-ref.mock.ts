import { Injectable } from '@angular/core';


/**
 * A mock of the Angular ChangeDetectorRefMock class
 */
@Injectable()
export class ChangeDetectorRefMock {
  public markForCheck = () => {};
  public detach = () => {};
  public detectChanges = () => {};
  public checkNoChanges = () => {};
  public reattach = () => {};
}

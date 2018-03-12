import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


/**
 * Helper to query a fixture for a selector
 *
 * @param fixture - The test fixture
 * @return The query result
 */
export function queryFor(fixture: ComponentFixture<any>, selector: string): any {
  return fixture.debugElement.query(By.css(selector));
}

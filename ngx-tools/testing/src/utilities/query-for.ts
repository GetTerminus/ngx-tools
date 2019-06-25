import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


/**
 * Helper to query a fixture for a selector
 *
 * @param fixture - The test fixture
 * @param selector - The selector to query for
 * @return The query result
 *
 * @example
 * const myItem = queryFor(myFixture, '.my-class');
 */
export function queryFor<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

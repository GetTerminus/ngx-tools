import { ComponentFixture } from '@angular/core/testing';


/**
 * Reusable expect statement to check for the nativeElement
 *
 * NOTE: this helper only accesses the 1st-level child within a component.
 *
 * @param fixture - The test fixture
 * @return expect statement
 *
 * @example
 * test('My test', () => {
 *   expectNativeEl(myEl);
 * });
 */
export function expectNativeEl<T>(fixture: ComponentFixture<T>): jest.Matchers<HTMLElement> {
  fixture.detectChanges();
  return expect(fixture.debugElement.children[0].nativeElement);
}

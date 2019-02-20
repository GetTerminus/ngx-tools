import { Type, Provider } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


/**
 * Create a TestBed fixture with a single component registered
 *
 * @param component - The test component
 * @param providers - Any providers to register to the test module
 * @param imports - Any items to import to the test module
 * @return The test fixture
 */
export function createComponent<T>(
  component: Type<T>,
  providers: Provider[] = [],
  imports: any[] = [],
): ComponentFixture<T> {
  TestBed.configureTestingModule({
    imports: [
      ...imports,
    ],
    declarations: [component],
    providers: [
      ...providers,
    ],
  }).compileComponents();

  return TestBed.createComponent<T>(component);
}

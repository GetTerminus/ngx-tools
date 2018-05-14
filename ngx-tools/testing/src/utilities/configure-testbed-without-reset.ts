import {
  async,
  TestBed,
  TestModuleMetadata,
} from '@angular/core/testing';


/**
 * Set up the TestBed without resetting the TestBed for every test
 *
 * https://github.com/angular/angular/issues/12409
 *
 * @param moduleDef - The module definition
 */
export function configureTestBedWithoutReset(moduleDef: TestModuleMetadata) {
  const resetTestingModule = TestBed.resetTestingModule;
  const preventAngularFromResetting = () => TestBed.resetTestingModule = () => TestBed;
  const allowAngularToReset = () => TestBed.resetTestingModule = resetTestingModule;

  beforeAll(async(
    async function() {
      resetTestingModule();
      preventAngularFromResetting();
      TestBed.configureTestingModule(moduleDef);
      await TestBed.compileComponents();
    },
  ));

  afterAll(() => allowAngularToReset());
}

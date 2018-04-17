import { applyMixins } from './apply-mixins';


// Disposable Mixin
class Disposable {
  isDisposed!: boolean;
  dispose() {
    this.isDisposed = true;
  }

}

// Activatable Mixin
class Activatable {
  isActive!: boolean;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

// Base class
class SmartObject implements Disposable, Activatable {
  // Disposable
  isDisposed: boolean = false;
  dispose!: () => void;
  // Activatable
  isActive: boolean = false;
  activate!: () => void;
  deactivate!: () => void;

  interact() {
    this.activate();
  }
}
applyMixins(SmartObject, [Disposable, Activatable]);



describe(`applyMixins`, () => {

  test(`should combine properties to base class`, () => {
    const smartObj = new SmartObject();

    smartObj.interact();
    expect(smartObj.isActive).toEqual(true);
  });

});

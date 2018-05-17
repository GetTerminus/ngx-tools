import {
  Inject,
  Injectable,
  InjectionToken,
} from '@angular/core';


export const ENV = new InjectionToken<any>('env');


/**
 * Return the native window object
 *
 * @return The native window object
 */
function _window(): Window {
  // return the native window object
  return window;
}


/**
 * Define a service that exposes the native window object
 */
@Injectable()
export class TsWindowService {

  constructor(
    @Inject(ENV) public env: any,
  ) {}


  get environment() {
    return this.env.value || 'no env';
  }


  /**
   * Return a function that returns the native window object
   *
   * @return The function that returns the native window object
   */
  get nativeWindow(): Window {
    return _window();
  }

}

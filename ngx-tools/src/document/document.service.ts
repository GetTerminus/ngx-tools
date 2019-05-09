import { Injectable } from '@angular/core';


/**
 * Return the native document object
 *
 * @return The native document object
 */
// tslint:disable-next-line no-any
export function originalDocument(): Document {
  return document;
}


/**
 * Define a service that exposes the DOCUMENT object
 */
@Injectable({
  providedIn: 'root',
})
export class TsDocumentService {

  /**
   * Return a function that returns the native document object
   *
   * @return The function that returns the native document object
   */
  public get document() {
    return originalDocument();
  }

}

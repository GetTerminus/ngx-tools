import { Store, State } from '@ngrx/store';
import { take } from 'rxjs/operators/take';


/**
 * Return the current value of an item in Store
 *
 * @param store - The store
 * @return The current state
 */
export function getStoreValue<T>(store: Store<State<T>>): State<T> {
  let state: State<T>;

  store.pipe(take(1)).subscribe((s) => state = s);

  return state;
}

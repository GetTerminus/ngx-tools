import * as deepmerge from 'deepmerge';


// TODO: how to type if I don't know the number of objects? Is it even useful since none will define
// the output type?

export function merge(objects: any[]): any {
  return deepmerge.all(objects);
}

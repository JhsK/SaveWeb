import { atom } from 'jotai';

export const testAtom = atom(false, (get, set, value) => {
  //   get(testAtom);
  set(testAtom, !get(testAtom));
});

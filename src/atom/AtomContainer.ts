import { atom } from "recoil";

export const imgAtom = atom<string[]>({
  key: "imgsAtom",
  default: [],
});

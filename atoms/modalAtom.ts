import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false as boolean,
});

export const modalTypeState = atom({
  key: "modalTypeState",
  default: "dropIn" as string,
});

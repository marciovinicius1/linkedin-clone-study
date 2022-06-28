import { atom } from "recoil";
import { Post } from "../types/post";

export const handlePostState = atom({
  key: "handlePostState",
  default: false as boolean,
});

export const getPostState = atom({
  key: "getPostState",
  default: {} as Post,
});

export const useSSRPostsState = atom({
  key: "useSSRPostsState",
  default: true as boolean,
});

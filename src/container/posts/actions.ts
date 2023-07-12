import { POSTS } from "./constants";

export const getPosts = (data: any) => ({
  type: POSTS.GET_LIST,
  data,
});

export const getPostSuccess = (data: any) => ({
  type: POSTS.GET_LIST_SUCCESS,
  data,
});


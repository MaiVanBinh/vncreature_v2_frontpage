import { TGetPostParams } from "@/api/posts";
import { POSTS } from "./constants";

export const getPosts = (data: TGetPostParams) => ({
  type: POSTS.GET_LIST,
  data,
});

export const getPostSuccess = (data: any) => ({
  type: POSTS.GET_LIST_SUCCESS,
  data,
});

export const changePostPage = (page: number) => ({
  type: POSTS.CHANGE_PAGE,
  page,
})
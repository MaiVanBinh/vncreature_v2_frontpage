import { POST_CATEGORY } from "./constants";

export const getPostCategories = () => ({
  type: POST_CATEGORY.GET_LIST
})

export const setPostCategory = (pCategory: number) => ({
  type: POST_CATEGORY.SET_CATEGORY,
  pCategory
})
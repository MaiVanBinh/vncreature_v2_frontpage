import { TPostCategory } from "@/api/type";
import { POST_CATEGORY } from "./constants";
type TPostCategoryState = {
  postCategory: TPostCategory[];
  currentCategory?: number, 
};
const initialState: TPostCategoryState = {
  postCategory: [],
};

export default function app(state = initialState, action: any) {
  switch (action.type) {
    case POST_CATEGORY.GET_LIST_SUCCESS: {
      const { postCategory } = action;
      return {
        ...state,
        postCategory,
        currentCategory: postCategory?.[0]?.id
      };
    }
    case POST_CATEGORY.SET_CATEGORY: {
      const { pCategory } = action;
      return {
        ...state,
        currentCategory: pCategory
      }
    } 
    default:
      return state;
  }
}

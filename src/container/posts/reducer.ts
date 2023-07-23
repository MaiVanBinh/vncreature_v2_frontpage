import { TPost } from "@/api/type";
import { POSTS } from "./constants";
type TState = {
  data?: TPost[],
  total?: number,
  totalPage?: number,
  currentPage: number,
}

const initialState: TState = {
  data: [],
  currentPage: 1
}

export default function app(state = initialState, action: any) {
  switch (action.type) {    
    case POSTS.GET_LIST_SUCCESS: {
      const { data, total, totalPage  } = action?.data

      return {
        ...state,
        data: data,
        total, 
        totalPage
      }
    }
    case POSTS.CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      }
    }
    default:
      return state
  }
}

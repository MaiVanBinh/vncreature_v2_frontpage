import { TPost } from "@/api/type";
import { POSTS } from "./constants";
type TState = {
  data?: TPost[]
}

const initialState: TState = {
  data: [],
}

export default function app(state = initialState, action: any) {
  const { data } = action
  switch (action.type) {
    case POSTS.GET_LIST_SUCCESS: {
      return {
        ...state,
        data: data,
      }
    }
    default:
      return state
  }
}

import { CREATURES } from "./constants";

const initialState = {
  data: ''
}

export default function app(state = initialState, action: any) {
  const { data } = action

  switch (action.type) {
    case CREATURES.GET_LIST_SUCCESS: {
      return {
        data: data
      }
    }
    default:
      return state
  }
}

import { TCreatureRedbook } from "@/api/type";
import { CREATURES } from "./constants";
type TState = {
  redbookData: TCreatureRedbook
}
const initialState: TState = {
  redbookData: {},
}

export default function app(state = initialState, action: any) {
  const { data } = action

  switch (action.type) {
    case CREATURES.GET_LIST_CREATURE_REDBOOK_STATISTIC_SUCCESS: {
      return {
        ...state,
        redbookData: data,
      }
    }
    default:
      return state
  }
}

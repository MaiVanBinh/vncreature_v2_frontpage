import { TCreature, TCreatureRedbook } from "@/api/type";
import { CREATURES } from "./constants";
type TState = {
  redbookData: TCreatureRedbook,
  listCreatures: TCreature[],
  total: number,
  totalPage: number,
  currentPage: number,
}
const initialState: TState = {
  redbookData: {},
  listCreatures: [],
  total: 0,
  totalPage: 0,
  currentPage: 1,
}

export default function app(state = initialState, action: any) {

  switch (action.type) {
    case CREATURES.GET_LIST_CREATURE_REDBOOK_STATISTIC_SUCCESS: {
      const { data } = action

      return {
        ...state,
        redbookData: data,
      }
    }
    case CREATURES.GET_LIST_SUCCESS: {
      const { listCreature } = action
      console.log('listCreature', listCreature)
      return {
        ...state,
        listCreatures: listCreature.data,
        total: listCreature.total,
        totalPage: listCreature.totalPage
      }
    }
    case CREATURES.CHANGE_PAGE: {
      const { page } = action;
      console.log('CHANGE_PAGE', page)
      return {
        ...state,
        currentPage: page
      }
    }
    default:
      return state
  }
}

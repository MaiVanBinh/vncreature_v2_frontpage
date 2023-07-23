import { TCreature, TCreatureRedbook } from "@/api/type";
import { CREATURES } from "./constants";
import { HYDRATE } from "next-redux-wrapper";
import { difference } from "lodash";
type TCreatureState = {
  redbookData: TCreatureRedbook,
  listCreatures: TCreature[],
  total: number,
  totalPage: number,
  currentPage: number,
  loading: boolean;
  currentCreature?: TCreature;
}
const initialState: TCreatureState = {
  loading: true,
  redbookData: {},
  listCreatures: [],
  total: 0,
  totalPage: 0,
  currentPage: 1,
}

export default function app(state = initialState, action: any) {
  switch (action.type) {
    case HYDRATE:

      return {...state, ...action.payload}
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
        totalPage: listCreature.totalPage,
        loading: false
      }
    }
    case CREATURES.CHANGE_PAGE: {
      const { page } = action;
      return {
        ...state,
        currentPage: page
      }
    }
    case CREATURES.SET_LOADING: {
      const { loading } = action;
      return {
        ...state,
        loading
      }
    }
    case CREATURES.SET_CREATURE_DETAIL: {
      const { creature } = action;
      return {
        ...state,
        currentCreature: creature
      }
    }
    case CREATURES.GET_BY_ID_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        currentCreature: data
      }
    }
    default:
      return state
  }
}

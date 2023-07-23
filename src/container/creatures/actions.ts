import { TGetCreature } from "@/api/creatures";
import { CREATURES } from "./constants";
import { TCreature } from "@/api/type";

export const getCreature = (data: TGetCreature) => ({
  type: CREATURES.GET_LIST,
  data,
});


export const getCreatureById = (id: number) => ({
  type: CREATURES.GET_BY_ID,
  id,
});

export const getCreatureSuccess = (data: any) => ({
  type: CREATURES.GET_LIST_SUCCESS,
  data,
});

export const getCreaturesRedbook = (data: any) => ({
  type: CREATURES.GET_LIST_CREATURE_REDBOOK_STATISTIC,
});

export const changePage = (page: number) => ({
  type: CREATURES.CHANGE_PAGE,
  page
});

export const setLoading = (loading: boolean) => ({
  type: CREATURES.SET_LOADING,
  loading
});

export const setCurrentCreature = (creature: TCreature) => ({
  type: CREATURES.SET_CREATURE_DETAIL,
  creature
})
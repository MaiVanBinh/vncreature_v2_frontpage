import { CREATURES } from "./constants";

export const getCreature = (data: any) => ({
  type: CREATURES.GET_LIST,
  data,
});


export const getCreatureSuccess = (data: any) => ({
  type: CREATURES.GET_LIST_SUCCESS,
  data,
});

export const getCreaturesRedbook = (data: any) => ({
  type: CREATURES.GET_LIST_CREATURE_REDBOOK_STATISTIC,
});

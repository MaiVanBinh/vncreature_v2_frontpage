import { CLASSIFY } from "./constants";

export const getClassify = (tab: number) => ({
  type: CLASSIFY.GET_LIST,
  tab: tab
});


export const getClassifySuccess = (data: any) => ({
  type: CLASSIFY.GET_LIST_SUCCESS,
  data,
});


export const changeTab = (tab: any) => ({
  type: CLASSIFY.CHANGE_TAB,
  tab,
});

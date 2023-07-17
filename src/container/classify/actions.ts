import { CLASSIFY } from "./constants";

export const getClassify = (tab: number) => ({
  type: CLASSIFY.GET_LIST,
  tab: tab
});


export const getClassifySuccess = (data: any) => ({
  type: CLASSIFY.GET_LIST_SUCCESS,
  data,
});


export const changeTab = (tab: any, isEdit?: boolean) => ({
  type: CLASSIFY.CHANGE_TAB,
  tab,
  isEdit
});


export const toggleFilter = () => ({
  type: CLASSIFY.TOGGLE_FILTER
})

export const syncToEditFilter = () => ({
  type: CLASSIFY.SYNC_TO_EDIT
})


export const syncFromEditFilter = () => ({
  type: CLASSIFY.SYNC_FROM_EDIT
})

export const changeKeywordFilter = (keyword: string, isEdit?: boolean) => ({
  type: CLASSIFY.FILTER_CHANGE_KEY_WORD,
  keyword, 
  isEdit
})


export const changeClassifyType = (value: number[], classifyType: string, isEdit?: boolean) => ({
  type: CLASSIFY.FILTER_CHANGE_CLASSIFY,
  value,
  classifyType,
  isEdit
})

export const handlerCheckRedbook = (isCheck: boolean, isEdit?: boolean) => ({
  type: CLASSIFY.FILTER_CHANGE_REDBOOK_CONDITION,
  isCheck,
  isEdit
})


export const removeFilter = (isEdit?: boolean) => ({
  type: CLASSIFY.FILTER_REMOVE,
  isEdit
})

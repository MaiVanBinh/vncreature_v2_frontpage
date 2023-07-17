import { TFamily, TGroup, TSet, TSpecies } from "@/api/type";
import { CLASSIFY } from "./constants";
import clone from "lodash/clone";

export type TFilterData = {
  species?: TSpecies[];
  groups?: TGroup[];
  sets?: TSet[];
  family?: TFamily[];
};
type TState = {
  filterData?: TSpecies[];
  isShowFilter: boolean;
  filterDataByAnimal?: TFilterData;
  filterMain: {
    filterDataByAnimal?: TFilterData;
    tab: number;
    filter: {
      isRedbook: false;
      keyword: "";
      classify: {
        name: "";
        value: [];
      };
    };
  };
  tempFilter: {
    filterDataByAnimal?: TFilterData;
    tab: number;
    filter: {
      isRedbook: false;
      keyword: "";
      classify: {
        name: "";
        value: [];
      };
    };
  };
};

const initialState: TState = {
  filterData: [],
  isShowFilter: false,
  filterMain: {
    tab: 1,
    filterDataByAnimal: {},
    filter: {
      isRedbook: false,
      keyword: "",
      classify: {
        name: "",
        value: [],
      },
    },
  },
  tempFilter: {
    tab: 1,
    filter: {
      isRedbook: false,
      keyword: "",
      classify: {
        name: "",
        value: [],
      },
    },
    filterDataByAnimal: {},
  },
};

export default function app(state = initialState, action: any) {
  switch (action.type) {
    case CLASSIFY.GET_LIST_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        filterData: data,
        filterMain: {
          ...state.filterMain,
          filterDataByAnimal: data?.find(
            (item: { id: any }) => item.id === state.filterMain.tab
          ),
        },
      };
    }
    case CLASSIFY.CHANGE_TAB: {
      const { tab, isEdit } = action;
      const newValue = state.filterData?.find(
        (item: { id: any }) => item.id === tab
      );
      if (isEdit) {
        return {
          ...state,
          tempFilter: {
            ...state.tempFilter,
            tab,
            filterDataByAnimal: newValue,
          },
        };
      }
      return {
        ...state,
        filterMain: {
          ...state.filterMain,
          tab,
          filterDataByAnimal: newValue,
        },
      };
    }
    case CLASSIFY.TOGGLE_FILTER: {
      const isShowFilter = !state.isShowFilter;
      return {
        ...state,
        isShowFilter,
      };
    }
    case CLASSIFY.SYNC_TO_EDIT: {
      return {
        ...state,
        tempFilter: clone(state.filterMain),
      };
    }
    case CLASSIFY.SYNC_FROM_EDIT: {
      return {
        ...state,
        filterMain: clone(state.tempFilter),
      };
    }
    case CLASSIFY.FILTER_CHANGE_KEY_WORD: {
      const { keyword, isEdit } = action;
      if (isEdit) {
        return {
          ...state,
          tempFilter: {
            ...state.tempFilter,
            filter: {
              ...state.tempFilter.filter,
              keyword,
            },
          },
        };
      }
      return {
        ...state,
        filterMain: {
          ...state.filterMain,
          filter: {
            ...state.filterMain.filter,
            keyword,
          },
        },
      };
    }
    case CLASSIFY.FILTER_CHANGE_CLASSIFY: {
      const { value, classifyType, isEdit } = action;
      if (isEdit) {
        return {
          ...state,
          tempFilter: {
            ...state.tempFilter,
            filter: {
              ...state.tempFilter.filter,
              classify: {
                name: classifyType,
                value: value,
              },
            },
          },
        };
      }
      return {
        ...state,
        filterMain: {
          ...state.tempFilter,
          filter: {
            ...state.tempFilter.filter,
            classify: {
              name: classifyType,
              value: value,
            },
          },
        },
      };
    }
    case CLASSIFY.FILTER_CHANGE_REDBOOK_CONDITION: {
      const { isCheck, isEdit } = action;
      console.log('FILTER_CHANGE_REDBOOK_CONDITION',isCheck, isEdit);

      if (isEdit) {
        return {
          ...state,
          tempFilter: {
            ...state.tempFilter,
            filter: {
              ...state.tempFilter.filter,
              isRedbook: isCheck
            },
          },
        };
      }
      return {
        ...state,
        filterMain: {
          ...state.tempFilter,
          filter: {
            ...state.tempFilter.filter,
            isRedbook: isCheck
          },
        },
      };
    }
    case CLASSIFY.FILTER_REMOVE: {
      const { isEdit } = action;

      if (isEdit) {
        return {
          ...state,
          tempFilter: {
            ...state.tempFilter,
            filter: {
              isRedbook: false,
              keyword: "",
              classify: {
                name: "",
                valueL: [],
              },
            },
          },
        };
      }
      return {
        ...state,
        filterMain: {
          ...state.tempFilter,
          filter: {
            isRedbook: false,
            keyword: "",
            classify: {
              name: "",
              valueL: [],
            },
          },
        },
      };
    }
    default:
      return state;
  }
}

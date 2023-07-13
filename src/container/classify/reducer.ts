import { TFamily, TGroup, TSet, TSpecies } from "@/api/type";
import { CLASSIFY } from "./constants";

export type TFilterData = {
  species?: TSpecies[];
  groups?: TGroup[];
  sets?: TSet[];
  family?: TFamily[];
};
type TState = {
  filterData?: TSpecies[];
  filterDataByAnimal?: TFilterData;
  tab: number;
  isShowFilter: boolean;
  filter: {
    isRedbook: false;
    keyword: "";
    classify: {
      name: "";
      valueL: [];
    };
  };
  tempFilter: {
    tab: number;
    filter: {
      isRedbook: false;
      keyword: "";
      classify: {
        name: "";
        valueL: [];
      };
    };
  };
};

const initialState: TState = {
  filterData: [],
  tab: 1,
  isShowFilter: false,
  filter: {
    isRedbook: false,
    keyword: "",
    classify: {
      name: "",
      valueL: [],
    },
  },
  tempFilter: {
    tab: 1,
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

export default function app(state = initialState, action: any) {
  switch (action.type) {
    case CLASSIFY.GET_LIST_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        filterData: data,
        filterDataByAnimal: data?.find(
          (item: { id: any }) => item.id === state.tab
        ),
      };
    }
    case CLASSIFY.CHANGE_TAB: {
      const { tab } = action;
      const newValue = state.filterData?.find(
        (item: { id: any }) => item.id === tab
      );
      console.log("newValue", newValue);
      return {
        ...state,
        tab,
        filterDataByAnimal: newValue,
      };
    }
    default:
      return state;
  }
}

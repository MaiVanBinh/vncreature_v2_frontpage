import { combineReducers } from "redux";
import creaturesReducer from "./creatures/reducer";

const reducer = () =>
  combineReducers({
    creaturesReducer,
  });

export default reducer;

import { combineReducers } from "redux";
import creaturesReducer from "./creatures/reducer";
import postsReducer from "./posts/reducer";

const reducer = () =>
  combineReducers({
    creaturesReducer,
    postsReducer,
  });

export default reducer;

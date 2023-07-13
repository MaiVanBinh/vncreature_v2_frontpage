import { combineReducers } from "redux";
import creaturesReducer from "./creatures/reducer";
import postsReducer from "./posts/reducer";
import classifyReducer from "./classify/reducer";

const reducer = () =>
  combineReducers({
    creaturesReducer,
    postsReducer,
    classifyReducer,
  });

export default reducer;

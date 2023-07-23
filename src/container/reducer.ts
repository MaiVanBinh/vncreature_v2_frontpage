import { combineReducers } from "redux";
import creaturesReducer from "./creatures/reducer";
import postsReducer from "./posts/reducer";
import classifyReducer from "./classify/reducer";
import pCategoryReducer from "./postCategory/reducer";

const reducer = () =>
  combineReducers({
    creaturesReducer,
    postsReducer,
    classifyReducer,
    pCategoryReducer
  });

export default reducer;

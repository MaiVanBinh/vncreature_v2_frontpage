import { getPostCategoriesApi } from "@/api/postCategory";
import { takeLatest, put, call, race } from "redux-saga/effects";
import { POST_CATEGORY } from "./constants";

function* handlerGetPostCategory({ }) {
  try {
    let postCategory = yield call(getPostCategoriesApi);
    yield put({
      type: POST_CATEGORY.GET_LIST_SUCCESS,
      postCategory,
    });
  } catch (err) {
    console.log("err handlerGetPostCategory", err);
  }
}

function* root() {
  yield takeLatest(POST_CATEGORY.GET_LIST, handlerGetPostCategory);
}

export default root;

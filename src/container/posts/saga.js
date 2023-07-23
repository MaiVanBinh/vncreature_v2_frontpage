import { getPostsApi } from "@/api/posts";
import { takeLatest, put, call, race } from "redux-saga/effects";
import { POSTS } from "./constants";

function* handlerGetPost(action) {
  try {
    const { category, page } = action.data
    const data = yield call(getPostsApi, { category, page });
    yield put({
      type: POSTS.GET_LIST_SUCCESS,
      data,
    });
  } catch (err) {
    console.log("err handlerGetPost", err);
  }
}


function* root() {
  yield takeLatest(POSTS.GET_LIST, handlerGetPost);
}

export default root;

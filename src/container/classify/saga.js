import { getClassifyFilter } from "@/api/classify";
import { takeLatest, put, call } from "redux-saga/effects";
import { CLASSIFY } from "./constants";

function* handlerGetClassify({ tab }) {
  try {
    const data = yield call(getClassifyFilter, tab);
    yield put({
      type: CLASSIFY.GET_LIST_SUCCESS,
      data,
    });
  } catch (err) {
    console.log("err handlerGetClassify", err);
  }
}

function* root() {
  yield takeLatest(CLASSIFY.GET_LIST, handlerGetClassify);
}

export default root;

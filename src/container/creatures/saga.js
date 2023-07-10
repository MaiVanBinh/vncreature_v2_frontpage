import { getCreatures } from "@/api/creatures";
import { takeLatest, put, call, race } from "redux-saga/effects";
import { getCreatureSuccess } from "./actions";
import { CREATURES } from "./constants";

function* handlerGetCreatures(action) {
  try {
    console.log("handlerGetCreatures");
    const data = yield call(getCreatures, {});
    console.log("data", data);

    yield put({
      type: CREATURES.GET_LIST_SUCCESS,
      data,
    });
  } catch (err) {
    console.log("err getRouteFlightPayload", err);
    // SENTRY.captureException(err);
  }
}

function* root() {
  yield takeLatest(CREATURES.GET_LIST, handlerGetCreatures);
}

export default root;

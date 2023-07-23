import { getCreatures, getCreaturesById, getCreaturesRedbookStatistic } from "@/api/creatures";
import { takeLatest, put, call, race } from "redux-saga/effects";
import { CREATURES } from "./constants";

function* handlerGetCreatures({ data }) {
  try {
    let listCreature = yield call(getCreatures, data);
    yield put({
      type: CREATURES.GET_LIST_SUCCESS,
      listCreature,
    });
  } catch (err) {
    console.log("err getRouteFlightPayload", err);
    // SENTRY.captureException(err);
  }
}

function* handlerGetCreaturesRedbookStatistic(action) {
  try {
    const data = yield call(getCreaturesRedbookStatistic);
    yield put({
      type: CREATURES.GET_LIST_CREATURE_REDBOOK_STATISTIC_SUCCESS,
      data,
    });
  } catch (err) {
    console.log("err handlerGetCreaturesRedbookStatistic", err);
    // SENTRY.captureException(err);
  }
}

function* handlerGetCreatureById(action) {
  try {
    const { id } = action;
    console.log(action, 'handlerGetCreatureById')

    let creature = yield call(getCreaturesById, id);

    yield put({
      type: CREATURES.GET_BY_ID_SUCCESS,
      data: creature
    })
  } catch {
    console.log(action, 'handlerGetCreatureById err')
  }
}

function* root() {
  yield takeLatest(CREATURES.GET_LIST, handlerGetCreatures);
  yield takeLatest(CREATURES.GET_LIST_CREATURE_REDBOOK_STATISTIC, handlerGetCreaturesRedbookStatistic);
  yield takeLatest(CREATURES.GET_BY_ID, handlerGetCreatureById);
}

export default root;

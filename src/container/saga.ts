import { all } from 'redux-saga/effects';

import Creatures from './creatures/saga'

export default function* AppSaga() {
  yield all([
    Creatures(),
  ]);
}

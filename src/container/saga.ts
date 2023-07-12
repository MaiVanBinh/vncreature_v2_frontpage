import { all } from 'redux-saga/effects';

import Creatures from './creatures/saga'
import Posts from './posts/saga';

export default function* AppSaga() {
  yield all([
    Creatures(),
    Posts()
  ]);
}

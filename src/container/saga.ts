import { all } from 'redux-saga/effects';

import Creatures from './creatures/saga'
import Posts from './posts/saga';
import Classify from './classify/saga';
import PostCategory from './postCategory/saga';

export default function* AppSaga() {
  yield all([
    Creatures(),
    Posts(),
    Classify(),
    PostCategory()
  ]);
}

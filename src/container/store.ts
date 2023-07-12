import {createStore, applyMiddleware, Store} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import createSagaMiddleware, {Task} from 'redux-saga';
import reducer from './reducer';
import rootSaga from './saga';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducer(), applyMiddleware(sagaMiddleware));

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper(makeStore);
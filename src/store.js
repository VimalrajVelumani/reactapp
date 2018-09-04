/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];

  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    applyMiddleware(...middlewares)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;

  return store;
}

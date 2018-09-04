import { all } from 'redux-saga/effects';
import isFunction from 'lodash/fp/isFunction';

// import searchSagas from '../containers/App/sagas';

export const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  }

  if (isFunction(sagas)) {
    return Array.of(sagas());
  }

  throw new TypeError(`${sagas} should be an Array or Function`);
};

export default function* rootSaga() {
//   const allSagas = [
//     ...runSagas(searchSagas)
//   ];
//   yield all(allSagas);
}

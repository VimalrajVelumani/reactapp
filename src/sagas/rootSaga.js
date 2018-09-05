import { fork } from 'redux-saga/effects';
import saga from '../containers/App/sagas';


export default function* rootSaga () {
    yield [
        fork(saga),
    ];
}
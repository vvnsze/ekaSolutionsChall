import { all } from 'redux-saga/effects';
import * as formOneSagas from './container/FormOne/sagas';

console.log('f1sagas: ', formOneSagas);

function* helloSaga() {
  console.log('Hello Sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
  ])
}

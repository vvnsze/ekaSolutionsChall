import { all } from 'redux-saga/effects';
import { initiateFormOneSubmit } from './container/FormOne/sagas';
import { initiateFormTwoSubmit } from './container/FormTwo/sagas';
import { initiateFormThreeSubmit } from './container/FormThree/sagas';

function* helloSaga() {
  console.log('Hello Sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    initiateFormOneSubmit(),
    initiateFormTwoSubmit(),
    initiateFormThreeSubmit()
  ])
}

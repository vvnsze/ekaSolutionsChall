import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  POST_FORM_THREE,
  FORM_THREE_SUBMISSION_RESULTS
} from './constants';

export function* initiateFormThreeSubmit() {
  yield takeLatest(POST_FORM_THREE, FormThreeSubmit);
}

function* FormThreeSubmit(action) {
  const user = action.payload;
  try {
    const result = yield call(postFormThreeAsync, user);
    yield put({ type: FORM_THREE_SUBMISSION_RESULTS, result: result.data });
  } catch (e) {
    console.error(e);
  }
}

function postFormThreeAsync(params) {
  return axios.post('/api/formThree', params);
}

export default initiateFormThreeSubmit

import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  POST_FORM_ONE,
  FORM_ONE_SUBMISSION_RESULTS
} from './constants';

export function* initiateFormOneSubmit() {
  yield takeLatest(POST_FORM_ONE, FormOneSubmit);
}

function* FormOneSubmit(action) {
  console.log('payload ', action.payload)
  const user = action.payload;
  try {
    const result = yield call(postFormOneAsync, user);
    console.log('result' , result.data);
    yield put({ type: FORM_ONE_SUBMISSION_RESULTS, result: result.data });
  } catch (e) {
    console.error(e);
  }
}

function postFormOneAsync(params) {
  return axios.post('/api/formOne', params);
}

export default initiateFormOneSubmit

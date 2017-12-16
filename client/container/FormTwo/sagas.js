import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  POST_FORM_TWO,
  FORM_TWO_SUBMISSION_RESULTS
} from './constants';

export function* initiateFormOneSubmit() {
  yield takeLatest(POST_FORM_TWO, FormOneSubmit);
}

function* FormTwoSubmit(action) {
  console.log('payload ', action.payload)
  const userInfo = action.payload;
  try {
    const result = yield call(postFormOneAsync, userInfo);
    console.log('result' , result.data);
    yield put({ type: FORM_TWO_SUBMISSION_RESULTS, result: result.data });
  } catch (e) {
    console.error(e);
  }
}

function postFormTwoAsync(params) {
  return axios.post('/api/formTwo', params);
}

export default initiateFormTwoSubmit

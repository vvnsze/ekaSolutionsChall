import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  POST_FORM_TWO,
  FORM_TWO_SUBMISSION_RESULTS
} from './constants';

export function* initiateFormTwoSubmit() {
  yield takeLatest(POST_FORM_TWO, FormTwoSubmit);
}

function* FormTwoSubmit(action) {
  const userInfo = action.payload;
  try {
    const result = yield call(postFormOneAsync, userInfo);
    yield put({ type: FORM_TWO_SUBMISSION_RESULTS, result: result.data });
  } catch (e) {
    console.error(e);
  }
}

function postFormTwoAsync(body) {
  return axios.post('/api/formTwo', body);
}

export default initiateFormTwoSubmit

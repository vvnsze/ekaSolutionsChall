import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  POST_FORM_ONE,
  FORM_ONE_SUBMISSION_RESULTS
} from './constants';

export function* initiateFormOneSubmit() {
  yield takeLatest(SEARCH_PODCAST_TERM, FormOneSubmitAsync);
}

function* FormOneSubmitAsync(action) {
  const user = { user: action.payload };
  try {
    const result = yield call(postFormOne({ params: user }));
    yield put({ type: FORM_ONE_SUBMISSION_RESULTS, podcasts: result });
  } catch (e) {
    console.error(e);
  }
}

function postFormOne(params) {
  return () => axios.get('/api/itunes', params);
}

export default [ initiateFormOneSubmit ]

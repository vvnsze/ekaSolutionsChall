import {
  POST_FORM_ONE,
  FORM_ONE_SUBMISSION_RESULTS
} from './constants';

const initialState = { };

const formOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ONE_SUBMISSION_RESULTS:
      return { result: action.result }
    default:
      return state;
  }
}

export default formOneReducer;

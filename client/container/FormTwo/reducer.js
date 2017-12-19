
import {
  POST_FORM_TWO,
  FORM_TWO_SUBMISSION_RESULTS
} from './constants';

const initialState = { };

function formTwoReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_TWO_SUBMISSION_RESULTS:
      return { result: action.result };
    default:
      return state;
  }
}

export default formTwoReducer;

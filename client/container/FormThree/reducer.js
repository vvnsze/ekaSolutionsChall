
import {
  POST_FORM_THREE,
  FORM_THREE_SUBMISSION_RESULTS
} from './constants';

const initialState = { result3: null };

function formThreeReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_THREE_SUBMISSION_RESULTS:
      return { result3: action.result };
    default:
      return state;
  }
}

export default formThreeReducer;

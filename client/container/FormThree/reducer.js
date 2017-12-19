
import {
  POST_FORM_THREE,
  FORM_THREE_SUBMISSION_RESULTS
} from './constants';

const initialState = { };

function formThreeReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_THREE_SUBMISSION_RESULTS:
      return { hello: 'three' };
    default:
      return state;
  }
}

export default formThreeReducer;

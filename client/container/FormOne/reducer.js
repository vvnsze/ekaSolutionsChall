import {
  POST_FORM_ONE,
  FORM_ONE_SUBMISSION_RESULTS
} from './constants';

const initialState = { form: 'null' };

const formOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_ONE:
      return { form: 'one' };
    case FORM_ONE_SUBMISSION_RESULTS:
      return { result: action.payload }
    default:
      return state;
  }
}

export default formOneReducer;

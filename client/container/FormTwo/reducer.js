
import {
  POST_FORM_TWO,
} from './constants';

const initialState = { form: 'null' };

function formTwoReducer(state = initialState, action) {
  switch (action.type) {
    case POST_FORM_TWO:
      return { form: 'two' };
    default:
      return state;
  }
}

export default formTwoReducer;

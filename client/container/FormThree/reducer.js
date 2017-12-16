
import {
  POST_FORM_THREE,
} from './constants';

const initialState = { hello: 'world' };

function formThreeReducer(state = initialState, action) {
  switch (action.type) {
    case POST_FORM_THREE:
      return { hello: 'there' };
    default:
      return state;
  }
}

export default formThreeReducer;

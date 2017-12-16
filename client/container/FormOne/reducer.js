import {
  POST_FORM_ONE,
} from './constants';

const initialState = { form: 'null' };

const formOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_ONE:
      return { form: 'one' };
    default:
      return state;
  }
}

export default formOneReducer;

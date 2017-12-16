import { combineReducers } from 'redux';
import formOneReducer from './container/FormOne/reducer';
import formTwoReducer from './container/FormTwo/reducer';
import formThreeReducer from './container/FormThree/reducer';

const combinedReducers = combineReducers({
  formOne: formOneReducer,
  formTwo: formTwoReducer,
  formThree: formThreeReducer
})

export default combinedReducers;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import formOneReducer from './container/FormOne/reducer';
import formTwoReducer from './container/FormTwo/reducer';
import formThreeReducer from './container/FormThree/reducer';



const rootReducer = combineReducers({
  formOne: formOneReducer,
  formTwo: formTwoReducer,
  formThree: formThreeReducer,
  routing: routerReducer
})

export default rootReducer;

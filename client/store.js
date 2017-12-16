import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
];

const enhancers = [
  applyMiddleware(...middlewares),
];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers)
);

store.runSaga = sagaMiddleware.run(rootSaga);

export default store

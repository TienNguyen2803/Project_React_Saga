import { createStore , compose , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';


const composeEnhancers = process.env.NODE_ENV !== 'production'
                        && typeof window === 'object'
                        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                          shouldHotReload: false
                        }) : compose;

const sagaMiddleware = createSagaMiddleware()
const configStore = () => {
  const middelWare = [thunk, sagaMiddleware];
  const enhancer = [applyMiddleware(...middelWare)];
  const store = createStore(rootReducer, composeEnhancers(...enhancer));
  sagaMiddleware.run(rootSaga)
  return store;
};

export default configStore;

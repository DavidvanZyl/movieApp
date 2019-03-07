import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import mainReducer from './reducers/main.reducer';

const loggerMiddleware = createLogger();

const store = createStore(
  mainReducer,
  undefined,
  compose(applyMiddleware(thunkMiddlware, loggerMiddleware))
);

export default store;

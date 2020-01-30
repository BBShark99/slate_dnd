import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import BeeReducer from './reducers/BeeReducer';

const initialState = {};

const store = createStore(
    combineReducers({ BeeReducer }),
    initialState,
    applyMiddleware(createLogger(), thunk)
);

export default store;
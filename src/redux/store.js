import {combineReducers, createStore,applyMiddleware} from 'redux';
import laptopReducer from './reducers/laptopReducer';
import mobileReducer from './reducers/mobileReducer';
import tvReducer from './reducers/tvReducer';
import userReducer from './reducers/userReducer';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk, logger];


const rootReducer = combineReducers({laptops:laptopReducer,mobiles:mobileReducer,tv:tvReducer, users:userReducer});
const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store;
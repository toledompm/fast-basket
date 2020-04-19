import {combineReducers} from 'redux';
// import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import storeReducers from './storeReducer';

export default combineReducers({auth: authReducer, stores: storeReducers});
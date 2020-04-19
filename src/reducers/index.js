import {combineReducers} from 'redux';
// import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import businessReducer from './storeReducer';

export default combineReducers({auth: authReducer, business: businessReducer});
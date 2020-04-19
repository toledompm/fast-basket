import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import storeReducers from './storeReducer';
import productReducer from './productReducer';

export default combineReducers({auth: authReducer, form: formReducer, stores: storeReducers, products: productReducer});
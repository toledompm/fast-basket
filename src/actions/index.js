import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STORE,
    EDIT_STORE,
    FETCH_STORE,
    FETCH_STORES,
    CREATE_PRODUCT,
    EDIT_PRODUCT,
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    SMS_SEND,
    SMS_VALIDATE
} from './types';

import api from '../api/api';

import history from '../history';

export const smsSend = ({username, password, whatsapp}) => async dispatch => {
    const response = await api.post('/sms', {username, password, phone: whatsapp});
    dispatch({
        type: SMS_SEND,
        payload: {
            ...response.data,
            username,
            whatsapp
        }
    })
    history.push('/auth');
};

export const smsValidate = validationNumber => async dispatch => {
    const response = await api.post('/validateSMS', {validationNumber});
    dispatch({type: SMS_VALIDATE, payload: response.data})
};

export const signIn = formValues => async(dispatch) => {

    const response = await api.post('/auth', {
        ...formValues
    });

    dispatch({type: SIGN_IN, payload: response.data});
    history.push('/dashboard');
};

export const signOut = () => {
    history.push('/');
    return {type: SIGN_OUT};
};

//#region Store
export const createStore = formValues => async(dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await api.post('/store', {
        ...formValues,
        userId
    });

    dispatch({type: CREATE_STORE, payload: response.data});
    history.push('/dashboard');
};

export const fetchStores = () => async(dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await api.get('/store', {userId});

    dispatch({
        type: FETCH_STORES,
        payload: response
            ?.data ?? []
    });
};

export const fetchStore = id => async dispatch => {
    const response = await api.get(`/store/${id}`);

    dispatch({type: FETCH_STORE, payload: response.data});
};

export const editStore = (id, formValues) => async dispatch => {
    const response = await api.patch(`/store/${id}`, formValues);

    dispatch({type: EDIT_STORE, payload: response.data});
    history.push('/dashboard');
};
//#endregion #region Product
export const createProduct = formValues => async(dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await api.post('/product', {
        ...formValues,
        userId
    });

    dispatch({type: CREATE_PRODUCT, payload: response.data});
    history.push('/dashboard');
};

export const fetchProducts = () => async dispatch => {
    const response = await api.get('/product');

    dispatch({type: FETCH_PRODUCTS, payload: response.data});
};

export const fetchProduct = id => async dispatch => {
    const response = await api.get(`/product/${id}`);

    dispatch({type: FETCH_PRODUCT, payload: response.data});
};

export const editProduct = (id, formValues) => async dispatch => {
    const response = await api.patch(`/product/${id}`, formValues);

    dispatch({type: EDIT_PRODUCT, payload: response.data});
    history.push('/dashboard');
};
//#endregion
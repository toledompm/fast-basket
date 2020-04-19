import _ from 'lodash';

import {FETCH_STORE, FETCH_STORES, CREATE_STORE, EDIT_STORE} from '../actions/types';

export default(state = {}, action) => {
    switch (action.type) {
        case FETCH_STORE:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            }
        case FETCH_STORES:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case CREATE_STORE:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case EDIT_STORE:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        default:
            return state;
    }
};
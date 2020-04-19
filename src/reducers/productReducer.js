import logo from '../assets/logo.svg';
import _ from 'lodash';

import {FETCH_PRODUCT, FETCH_PRODUCTS, CREATE_PRODUCT, EDIT_PRODUCT} from '../actions/types';

export default(state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        default:
            return state;
    }
};

export const testData = [
    {
        id: 1,
        name: 'Product 1',
        image: logo,
        description: 'Essa é a descrição',
        price: 25.00
    }, {
        id: 2,
        name: 'Product 3',
        image: logo,
        description: 'Essa é a descrição',
        price: 30.00
    }, {
        id: 3,
        name: 'Product 4',
        image: logo,
        description: 'Essa é a descrição',
        price: 45.00
    }
];
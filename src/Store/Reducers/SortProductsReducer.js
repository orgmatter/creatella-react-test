import { SORT_PRODUCTS_SUCCESS, SORT_PRODUCTS_ERROR } from '../Actions/types';
import { sortProductsState as initialState } from '../state';

const sortProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SORT_PRODUCTS_SUCCESS:
        return {
            sortProducts: action.payload,
            status: 'success',
            ...state
        }
        case SORT_PRODUCTS_ERROR:
        return {
            sortProducts: action.payload,
            status: 'error',
            ...state
        }
        default: 
        return {
            ...state,
        }
    }
}

export default sortProductsReducer;
import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_END } from '../Actions/types';
import { allProductsState as initialState } from '../state';

function productsReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_BEGIN:
        return {
            ...state,
            status: action.status
        }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                status: action.status,
                isSortable: action.isSortable
            }
        
        case FETCH_PRODUCTS_ERROR:
        return {
            ...state,
            status: action.status,
        }
        case FETCH_PRODUCTS_END:
        return {
            ...state,
            status: action.status,
        }
        default: {
            return state
        }
    }
}

export default productsReducer;
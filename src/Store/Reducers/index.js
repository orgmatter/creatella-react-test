import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import sortProductsReducer from './sortProductsReducer';

export const rootReducers = combineReducers({
    productState: productsReducer,
    sortProductState: sortProductsReducer
})

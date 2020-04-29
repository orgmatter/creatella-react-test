import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import SortProductsReducer from './SortProductsReducer';

export const rootReducers = combineReducers({
    productState: productsReducer,
    sortProducts: SortProductsReducer,
})

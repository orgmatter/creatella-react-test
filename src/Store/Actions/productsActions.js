import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_END } from './types';
import { Endpoints as ENDPOINTS } from '../API/Endpoints';

export const getProductAction = (productParams) => dispatch => {

    const { host, uri, queryParams } = ENDPOINTS;
    const { pageNo } = productParams;
    console.log(pageNo);
    
    dispatch({
        type: FETCH_PRODUCTS_BEGIN,
        status: 'begin'
    })
    fetch(`${host+uri}?${queryParams.paginate.page}=${pageNo}&${queryParams.paginate.limit.default}`, {
        method: 'GET',
    })
    .then(data => data.json())
    .then(res => {
        console.log(res.length)
        if(res.length > 0) {
            
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: res,
                status: 'success',
            })
        }
    }).catch(e => {
        dispatch({
            type: FETCH_PRODUCTS_ERROR,
            payload: e.message,
            status: 'error',
        })
    })
    dispatch({
        type: FETCH_PRODUCTS_END,
        status: 'end',
    })
}
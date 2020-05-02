import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_END } from './types';
import { Endpoints as ENDPOINTS } from '../API/Endpoints';

export const getProductAction = (productParams) => dispatch => {

    const { host, uri, queryParams } = ENDPOINTS;
    const { pageNo, btnClickObj } = productParams;
    
    let url = `${host+uri}?${queryParams.paginate.page}=${pageNo}&${queryParams.paginate.limit.default}`
    
    if(btnClickObj != false) {
        const sortType = btnClickObj.btnName;
        url = `${host+uri}?${queryParams.paginate.page}=${pageNo}&${queryParams.paginate.limit.default}&${queryParams.sorting.sort}=${sortType}`;
    }

    dispatch({
        type: FETCH_PRODUCTS_BEGIN,
        status: 'begin'
    })
    fetch(url, {
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
                isSortable: btnClickObj != false ? true : false
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
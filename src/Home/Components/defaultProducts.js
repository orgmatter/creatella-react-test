import React, { useEffect, useReducer, useState, useRef, useCallback } from 'react';
import { Endpoints as ENDPOINTS } from '../../Store/API/Endpoints';
import ProductCards from '../../Components/productCards';
import { defaultProductAction } from '../Actions/defaultProductAction';

const uuid = require('uuid').v4;

function DefaultProducts (props) {

    const [page, setPage] = useState(0);
    const cardFlexCoverRef = useRef(null);
    const bottomLimitRef = useRef(null);

    const defaultProductStateProps = {
        defaultProductData: [], 
        fetchStatus: true, 
    }

    const defaultProductReducer = (state, action) => {

        switch(action.type) {
            case 'FETCH_PRODUCT_SUCCESS':
                return {
                    ...state,
                    fetchStatus: false,
                    defaultProductData: state.defaultProductData.concat(action.payload)
                }
            case 'FETCH_PRODUCT_FAILED':
                return {
                    ...state,
                    fetchStatus: false,
                }
            default:
                return state

        }
    }
    const [defaultProductsState, productDispatch] = useReducer(defaultProductReducer, defaultProductStateProps);
    const { defaultProductData, fetchStatus } = defaultProductsState;
    
    const { host, uri, queryParams } = ENDPOINTS;
    const { paginate } = queryParams;
    

    useEffect(() => {
        const url = `${host+uri}?${paginate.page}=${page}&${paginate.limitDefault}`;
        const productParams = {
            url,
            productDispatch
        }

        if(page >  0) {
            defaultProductAction(productParams);   
        }
   
    }, [page]);

    const bottomLimitObserver = useCallback(node => {
        new IntersectionObserver(entries => {
            entries.forEach(en => {
                if(en.intersectionRatio > 0) {
                    setPage(prevPage => {
                        prevPage += 1;
                        return prevPage;
                    })
                }
            })
        }).observe(node);   
    }, [setPage])

    useEffect(() => {

        if(bottomLimitRef.current) {
            bottomLimitObserver(bottomLimitRef.current)
        }

    }, [bottomLimitObserver, bottomLimitRef]);

    return (
        <div className="home-content-body-flex">
            <div className="home-content-body-item">
                <div className="product-cards-flex" ref={cardFlexCoverRef}>
                    { defaultProductData && defaultProductData.length > 0 ? 
                        defaultProductData.map((productData, index) => {
                            return (
                                <ProductCards key={uuid()} cardKey={uuid()} product={productData}/>
                            )
                        }) : 'No result'
                    }
                </div>
                {
                    fetchStatus && (
                        <div className="product-card-load-status-cover">
                            <p className="product-card-load-status-text">...Loading</p>
                        </div>
                    )
                }
                <div className="bottom-limit-cover">
                    <div className="bottom-limit-div" ref={bottomLimitRef}>
                        <h2 className="bottom-limit-text">End of products</h2>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default DefaultProducts;
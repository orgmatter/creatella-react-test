import React, { useEffect, useReducer, useState, useRef, useCallback } from 'react';
import { Endpoints as ENDPOINTS } from '../../Store/API/Endpoints';
import ProductCards from '../../Components/productCards';
import { defaultProductAction } from '../Actions/defaultProductAction';
import { defaultProductReducer } from '../Reducers/defaultProductReducer';
import { useScrollObserver } from '../customHooks/useScrollObsserver';

const uuid = require('uuid').v4;

function DefaultProducts (props) {

    const [page, setPage] = useState(0);
    const cardFlexCoverRef = useRef(null);
    const bottomLimitRef = useRef(null);

    const defaultProductStateProps = {
        defaultProductData: [], 
        fetchStatus: true, 
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

        // trigger action only if page has incremented from zero (0)
        if(page >  0) {
            defaultProductAction(productParams);   
        }
   
    }, [page]);

    const scrollParams = {
        updatePage: {
            setPage
        },
    }

    // observe the element at the end of each collection of data on scroll
    const bottomLimitObserver = useScrollObserver(scrollParams);

    useEffect(() => {

        // if element at the of the page changes from null to current
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
                        }) : null
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
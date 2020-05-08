import React, { useEffect, useReducer, useState, useRef, useCallback } from 'react';
import { Endpoints as ENDPOINTS } from '../../Store/API/Endpoints';
import ProductCards from '../../Components/productCards';
import { sortableProductAction } from '../Actions/sortableProductAction';
import { sortableProductReducer } from '../Reducers/sortableProductReducer';
import { useScrollObserver } from '../customHooks/useScrollObserver';

const uuid = require('uuid').v4;

function SortableProducts (props) {

    const { btnClickStatus, isSortable } = props;

    const [page, setPage] = useState(0);
    const cardFlexCoverRef = useRef(null);
    const bottomLimitRef = useRef(null);

    const sortableProductStateProps = {
        sortableStackProductData: [], 
        sortableProductData: [],
        fetchStatus: true, 
    }

    const [sortableProductsState, productDispatch] = useReducer(sortableProductReducer, sortableProductStateProps);
    const { sortableStackProductData, sortableProductData, fetchStatus } = sortableProductsState;
    
    const { host, uri, queryParams } = ENDPOINTS;
    const { paginate, sorting } = queryParams;
    const btnClickObj = btnClickStatus.length > 0 ? btnClickStatus.find(btn => btn.isClick == true): false;
    const { btnName, isClick } = btnClickObj;
    

    useEffect(() => {
        const url = `${host+uri.page}?${paginate.page}=${page}&${paginate.limitDefault}&${sorting.sort}=${btnName}`;
        const productParams = {
            url,
            productDispatch
        }

        // trigger action only if page has incremented from zero (0)
        if(page >  0) {
            sortableProductAction(productParams);   
        }
   
    }, [page, btnClickStatus]);

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
                    { sortableStackProductData && sortableStackProductData.length > 0 ? 
                        sortableStackProductData.map((productData, index) => {
                            const productDataLastItem = sortableStackProductData[sortableStackProductData.length - 1];
                            const productDataLastIndex = sortableStackProductData.lastIndexOf(productDataLastItem);

                            return (
                                <ProductCards key={uuid()} cardKey={uuid()} product={productData} isSortable={isSortable} page={page} setPage={setPage} cardItemParentRef={cardFlexCoverRef} cardItemIndex={index} cardItemLastIndex={productDataLastIndex} />
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
                <div className="bottom-limit-cover" ref={bottomLimitRef}>
                    <div className="bottom-limit-div">
                        {
                            sortableProductData.length <= 0 && (
                                <h2 className="bottom-limit-text">~ end of catalogue ~</h2>
                            )
                        }
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default SortableProducts;
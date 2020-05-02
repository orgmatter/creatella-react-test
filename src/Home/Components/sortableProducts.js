import React, { useEffect, useReducer, useState, useRef, useCallback } from 'react';
import { Endpoints as ENDPOINTS } from '../../Store/API/Endpoints';
import ProductCards from '../../Components/productCards';
import { sortableProductAction } from '../Actions/sortableProductAction';

const uuid = require('uuid').v4;

function SortableProducts (props) {

    const { btnClickStatus } = props;
    console.log(btnClickStatus)

    const [page, setPage] = useState(0);
    const cardFlexCoverRef = useRef(null);
    const bottomLimitRef = useRef(null);

    const sortableProductStateProps = {
        sortableProductData: [], 
        fetchStatus: true, 
    }

    const sortableProductReducer = (state, action) => {

        switch(action.type) {
            case 'FETCH_PRODUCT_SUCCESS':
                return {
                    ...state,
                    fetchStatus: false,
                    sortableProductData: state.sortableProductData.concat(action.payload)
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
    const [sortableProductsState, productDispatch] = useReducer(sortableProductReducer, sortableProductStateProps);
    const { sortableProductData, fetchStatus } = sortableProductsState;
    
    const { host, uri, queryParams } = ENDPOINTS;
    const { paginate, sorting } = queryParams;
    const btnClickObj = btnClickStatus.length > 0 ? btnClickStatus.find(btn => btn.isClick == true): false;
    const { btnName, isClick } = btnClickObj;
    

    useEffect(() => {
        const url = `${host+uri}?${paginate.page}=${page}&${paginate.limitDefault}&${sorting.sort}=${btnName}`;
        const productParams = {
            url,
            productDispatch
        }

        if(page >  0) {
            sortableProductAction(productParams);   
        }
   
    }, [page, btnClickStatus]);

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
                    { sortableProductData && sortableProductData.length > 0 ? 
                        sortableProductData.map((productData, index) => {
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

export default SortableProducts;
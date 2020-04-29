import React, { useEffect, useState, useRef, useCallback } from 'react';
import ProductCards from '../Components/productCards';
import ProductActionHeaderAppBar from './Header/productActionHeaderAppbar';

const uuid = require('uuid').v4 ;


function Home (props) {

    const { getProducts, productState } = props;
    const { products, status } = productState

    const [page, setPage] = useState(1);
    const [pageProducts, setPageProducts] = useState(products);
    const [isElemInView, setIsElemInView] = useState(false);
    const bottomLimitRef = useRef(null);
    const cardFlexCoverRef = useRef(null);
    const actionHeaderAppbarRef = useRef(null);

    useEffect(() => {
        const productParams = {
            pageNo: page
        }
        setPageProducts(prevState => {
            if ((products) && (prevState != products)) {
                return prevState.concat(products);
            }else {
                getProducts(productParams);
                return prevState;
            }
        })
    }, [getProducts, products, page]);

    // check if element is in windows viewport
    const isElementViewPort = (elem) => {

        var bounding = elem.getBoundingClientRect();

        if (
            (bounding.top >= 0) && 
            (bounding.left >= 0) &&
            (bounding.right <= (window.innerWidth || window.document.documentElement.clientWidth)) &&
            (bounding.bottom <= (window.innerHeight || window.document.documentElement.clientHeight))
        ) {
            return true
        }else {
            return false
        }
    }

    window.addEventListener('scroll', () => {

        const elem = bottomLimitRef.current

        if((elem != null) && (isElementViewPort(elem))){
            setPage(prevPage => {
                return prevPage += 1;
            })
            setPageProducts(prevState => {
                if ((products) && (prevState != products)) {
                    return prevState.concat(products);
                }else {
                    return prevState;
                }
            })
        }else {
            return false;
        }
    })


    return (
        <div className="component-home-container">
            <div className="component-home-cover-flex">
                <div className="component-home-cover-item">
                    <div className="home-header-cover">

                    </div>
                    <div className="home-content-cover">
                        <ProductActionHeaderAppBar />
                        {
                            status && status === 'success' ?
                            <>
                                <div className="home-content-body-flex">
                                    <div className="home-content-body-item">
                                        <div className="product-cards-flex" ref={cardFlexCoverRef}>
                                            { pageProducts && pageProducts.length > 0 ? 
                                                pageProducts.map((pageProduct, index) => {
                                                    return (
                                                        <ProductCards key={uuid()} cardKey={uuid()} product={pageProduct}/>
                                                    )
                                                }) : 'No result'
                                            }
                                        </div>
                                        <div className="bottom-limit-cover">
                                            <div className="bottom-limit-div" ref={bottomLimitRef}>
                                                <h2 className="bottom-limit-text">End of products</h2>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </> : 
                            <div className="product-card-load-status-cover">
                                <p className="product-card-load-status-text">...Loading</p>
                            </div>
                        }  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
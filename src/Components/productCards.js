import React, { useEffect, useRef, useCallback } from 'react';
import { cardParamFormat } from './productCardFuncs';
import { productCardStyles } from './styles';
import { useScrollObserver } from '../Home/customHooks/useScrollObsserver';

function ProductCards (props) {
    
    const { product, cardKey, isSortable, page, setPage, cardItemParentRef, cardItemIndex, cardItemLastIndex} = props;
    const lastCardItemRef = useRef(null);
    const cardParams = {
        price: {
            value: product.price,
            type: 'price',
        },
        date: {
            value: product.date,
            type: 'date',
        }
    }


    const styleParams = {
        size: product.size,
    }


    const classes = productCardStyles(styleParams);

    const lastCardItemObserver = useCallback(node => {
        const intObs = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.intersectionRatio > 0) {
                    
                    setPage(prevState => {
                        if(page === prevState) {
                            return prevState
                        }else {
                            prevState+= 1
                            return prevState;
                        }
                    })
                    
                    intObs.unobserve(node); // detach the observer when done
                }
            });
        })
        intObs.observe(node);
    }, [setPage]);


    useEffect(() => {
        lastCardItemRef.current = document.getElementById(`product-cards-item-${cardItemLastIndex}`);

        if(lastCardItemRef.current) {
            lastCardItemObserver(lastCardItemRef.current)
        }

    }, [lastCardItemObserver, lastCardItemRef])

    return (
        <div className="product-cards-item" id={`product-cards-item-${cardItemIndex}`} key={cardKey}>
            <div className="product-card-header-cover">
                <div className="product-face-font-cover">
                    <h2 className={`${classes().fontFace} product-face-font`}>{product.face}</h2>
                </div>
                <div className="product-id-font-cover">
                    <h2 className="product-id-text" >{product.id}</h2>
                </div>
            </div>
            <div className="product-card-footer-container">
                <div className="product-card-footer-cover">
                    <div className={isSortable && isSortable === 'price'? "product-card-footer-cover-flex product-card-footer-cover-flex-price" : "product-card-footer-cover-flex"}>
                        <div className="product-card-footer-cover-item">
                            <div className="product-text-cover">
                                <p className="product-title-font">Price:</p>
                            </div>
                        </div>
                        <div className="product-card-footer-cover-item">
                            <div className="product-text-cover">
                                <p className="product-value-font">{cardParamFormat(cardParams.price)}</p>
                            </div>
                        </div>
                    </div>
                    <div className={isSortable && isSortable === 'size'? "product-card-footer-cover-flex product-card-footer-cover-flex-size" : "product-card-footer-cover-flex"}>
                        <div className="product-card-footer-cover-item">
                            <div className="product-text-cover">
                                <p className="product-title-font">Size:</p>
                            </div>
                        </div>
                        <div className="product-card-footer-cover-item">
                            <div className="product-text-cover">
                                <p className="product-value-font">{product.size}px</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-card-footer-cover-flex">
                        <div className="product-card-footer-cover-item">
                            <div className="product-text-cover">
                                <p className="product-title-font">Date:</p>
                            </div>
                        </div>
                        <div className="product-card-footer-cover-item">
                            <div className="product-text-cover">
                                <p className="product-value-font">{cardParamFormat(cardParams.date)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default ProductCards;
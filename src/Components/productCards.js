import React from 'react';
import { cardParamFormat } from './productCardFuncs';
import { productCardStyles } from './styles';
import SponsorAdvertCard from './sponsorAdvertCard';

const uuid = require('uuid').v4;

function ProductCards (props) {
    
    const { product, cardKey, isSortable, page, setPage, cardItemParentRef, cardItemIndex, cardItemLastIndex} = props;
    
    // variables for adverts 
    const viewedAds = [];
    var imgIdNo = Math.floor(Math.random()*1000);
    var productPageNo = page;
    var productIndexNo = cardItemIndex;
    productIndexNo+= 1;

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


    if((productIndexNo/(productPageNo)) === 20) {

        if((viewedAds.length > 0) && (viewedAds.includes(imgIdNo))) {
            return null
        }else {
            viewedAds.concat(imgIdNo)
        
            return (
                <SponsorAdvertCard key={uuid()} advertKey={uuid()} imgIdNo={imgIdNo} />
            )

        }
    }else {

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
}

export default ProductCards;
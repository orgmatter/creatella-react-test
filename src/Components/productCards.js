import React from 'react';

function ProductCards (props) {
    
    const { product, cardKey } = props;

        return (
            <div className="product-cards-item" key={cardKey}>
                <div className="product-card-header-cover">
                    <div className="product-face-font-cover">
                        <h2 className="product-face-font" style={{fontSize: product.size}}>{product.face}</h2>
                    </div>
                </div>
                <div className="product-card-footer-cover">
                    <div className="product-price-cover">
                        <p className="product-price-font"><span className="font-heading">Price: </span>{product.price}</p>
                    </div>
                    <div className="product-size-cover">
                        <p className="product-size-font"><span className="font-heading">Size: </span>{product.size}</p>
                    </div>
                    <div className="product-date-cover">
                        <p className="product-date-font"><span className="font-heading">Date: </span>{product.date}</p>
                    </div>
                </div>
            </div>
        )
  
}

export default ProductCards;
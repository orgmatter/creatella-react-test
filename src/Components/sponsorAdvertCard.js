import React from 'react';
import { Endpoints as ENDPOINTS } from '../Store/API/Endpoints';

export default function SponsorAdvertCard (props) {

    const { imgIdNo, advertKey } = props;
    const { host, uri, queryParams } = ENDPOINTS;
    const srcParams = `${host+uri.advert}/${queryParams.random.key}=${imgIdNo}`;

    return (
        <header className="advert-container" key={advertKey}>
            <h1>Products Grid</h1>

            <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

            <p>But first, a word from our sponsors:</p>
            <div className="advert-img-container-flex">
                <div className="advert-img-container-item">
                    <img className="advert-img" src={srcParams} />
                </div>
            </div>
        </header>
    )
}
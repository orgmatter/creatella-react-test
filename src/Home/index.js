import React from 'react';
import ProductActionHeaderAppBar from './Header/productActionHeaderAppbar';
import DefaultProducts from './Components/defaultProducts';
import SortableProducts from './Components/sortableProducts';


function Home (props) {

    const { sortProducts, sortProductState } = props;
    const { btnClickStatus, isSortable } = sortProductState;
    
    return (
        <div className="component-home-container">
            <div className="component-home-cover-flex">
                <div className="component-home-cover-item">
                    <div className="home-header-cover">

                    </div>
                    <div className="home-content-cover">
                        <ProductActionHeaderAppBar sortProductAction={sortProducts} isSortable={isSortable}/>
                        {
                            isSortable === 'price' ? 
                            <SortableProducts  btnClickStatus={btnClickStatus} isSortable={isSortable} /> : null
                        }
                        {
                            isSortable === 'size' ? 
                            <SortableProducts  btnClickStatus={btnClickStatus} isSortable={isSortable} /> : null
                        }
                        {
                            isSortable === 'id' ? 
                            <SortableProducts  btnClickStatus={btnClickStatus} isSortable={isSortable} /> : null
                        }
                        {
                            isSortable === false ? 
                            <DefaultProducts /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ProductHeaderToolbar from './productHeaderToolbar';

export default function ProductHeaderAppBar (props) {

    return (
        <div className="product-appbar-container">
            <AppBar position="static" className="product-appbar-cover">
                <ProductHeaderToolbar />
            </AppBar>
        </div>
    )
}
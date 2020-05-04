import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ProductActionHeaderToolbar from './productActionHeaderToolbar';

export default function ProductActionHeaderAppBar (props) {

    const { sortProductAction, isSortable } = props;

    const actionHeaderAppbarRef = useRef(null);

    window.addEventListener('scroll', () => {

        const elem = actionHeaderAppbarRef.current;
        const fixedClassName = 'product-action-appbar-cover-fixed';

        if(window.scrollY > 1) {

            elem.classList.add(fixedClassName);
        }else {
            elem.classList.remove(fixedClassName);
        }
    })

    return (
        <div className="product-action-appbar-container">
            <AppBar position="static" className="product-action-appbar-cover" ref={actionHeaderAppbarRef}>
                <ProductActionHeaderToolbar sortProductAction={sortProductAction} isSortable={isSortable} />
            </AppBar>
        </div>
    )
}
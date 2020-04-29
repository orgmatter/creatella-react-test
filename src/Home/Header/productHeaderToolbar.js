import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';


export default function ProductHeaderToolbar (props) {

    return (
        <div className="product-toolbar-container">
            <Toolbar className="product-toolbar-cover">
                <div className="toolbar-cover-flex">
                    <div className="toolbar-cover-item" id="project-app-name-cover">
                        <h2 className="project-app-name">Creatella E-commerce</h2>
                    </div>
                    <div className="toolbar-cover-item" id="toolbar-action-cover-flex">
                        <div className="toolbar-action-cover-item" id="action-price-cover">
                            Price
                        </div>
                        <div className="toolbar-action-cover-item" id="action-size-cover">
                            Size
                        </div>
                        <div className="toolbar-action-cover-item" id="action-id-cover">
                            ID
                        </div>
                    </div>
                </div>
            </Toolbar>
        </div>
    )
}
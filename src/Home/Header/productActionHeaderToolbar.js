import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import SortIcon from '@material-ui/icons/Sort';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import FilterListIcon from '@material-ui/icons/FilterList';


export default function ProductActionHeaderToolbar (props) {
    
    return (
        <div className="product-action-toolbar-container">
            <Toolbar className="product-action-toolbar-cover">
                <div className="toolbar-action-cover-flex">
                    <div className="toolbar-action-cover-item" id="project-app-name-cover">
                        <h2 className="project-app-name">Creatella E-Commerce</h2>
                    </div>
                    <div className="toolbar-action-cover-item">
                        <div className="action-cover-flex">
                            <div className="action-cover-item" id="action-sort-cover">
                                <div className="action-icon-cover-flex">
                                    <div className="action-icon-cover-item" id="action-sort-icon-cover">
                                        <div className="icon-cover">
                                            <SortIcon className="action-icon" />
                                        </div>
                                        <div className="icon-subtitle-cover">
                                            <span className="icon-subtitle-span">Sort By</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="action-cover-item" id="action-price-cover">
                                <div className="action-icon-cover-flex">
                                    <div className="action-icon-cover-item">
                                        <div className="icon-cover">
                                            <AttachMoneyIcon className="action-icon" />
                                        </div>
                                        <div className="icon-subtitle-cover">
                                            <span className="icon-subtitle-span">Price</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="action-cover-item" id="action-size-cover">
                                <div className="action-icon-cover-flex">
                                    <div className="action-icon-cover-item">
                                        <div className="icon-cover">
                                            <FormatSizeIcon className="action-icon" />
                                        </div>
                                        <div className="icon-subtitle-cover">
                                            <span className="icon-subtitle-span">Size</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="action-cover-item" id="action-id-cover">
                                <div className="action-icon-cover-flex">
                                    <div className="action-icon-cover-item">
                                        <div className="icon-cover">
                                            <FilterListIcon className="action-icon" />
                                        </div>
                                        <div className="icon-subtitle-cover">
                                            <span className="icon-subtitle-span">ID</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </div>
    )
}
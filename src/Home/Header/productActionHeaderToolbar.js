import React, { useState, useRef } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@material-ui/core/Radio';
import SortIcon from '@material-ui/icons/Sort';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';


export default function ProductActionHeaderToolbar (props) {
    
    const { sortProductAction, isSortable } = props;
    const [selectedValue, setSelectedValue] = useState('');
    const [isRadioCheck, setIsRadioCheck] = useState(false);
    const sortPriceRadioLabelRef = useRef(null);
    const sortSizeRadioLabelRef = useRef(null);
    const sortIdRadioLabelRef = useRef(null);

    const handleRadioChange = (e) => {
        const radioValue = e.target.value;
        const { checked } = e.target;
        
        setSelectedValue(radioValue);

        if((checked) && (radioValue == 'price')) {
            sortPriceRadioLabelRef.current.classList.add('action-icon-cover-item-price');
            sortSizeRadioLabelRef.current.classList.remove('action-icon-cover-item-size');
            sortIdRadioLabelRef.current.classList.remove('action-icon-cover-item-id');
        }else if((checked) && (radioValue == 'size')) {
            sortSizeRadioLabelRef.current.classList.add('action-icon-cover-item-size');
            sortPriceRadioLabelRef.current.classList.remove('action-icon-cover-item-price');
            sortIdRadioLabelRef.current.classList.remove('action-icon-cover-item-id');
        }else if((checked) && (radioValue == 'id')) {
            sortIdRadioLabelRef.current.classList.add('action-icon-cover-item-id');
            sortPriceRadioLabelRef.current.classList.remove('action-icon-cover-item-price');
            sortSizeRadioLabelRef.current.classList.remove('action-icon-cover-item-size');
        }

        const sortParams = {
            btnClickStatus: [
                {btnName: 'price', isClick: radioValue == 'price'? true : false},
                {btnName: 'size', isClick: radioValue == 'size'? true : false},
                {btnName: 'id', isClick: radioValue == 'id'? true : false}
            ]
        }
        sortProductAction(sortParams);
    }

    return (
        <div className="product-action-toolbar-container">
            <Toolbar className="product-action-toolbar-cover">
                <div className="toolbar-action-cover-flex">
                    <div className="toolbar-action-cover-item" id="project-app-name-cover">
                        {
                            isSortable && isSortable !== false ? 
                            
                            <h2 className="project-app-name"><a className="project-app-name-link" href="/"><IconButton><ArrowBackIosIcon /></IconButton></a></h2> :
                            <h2 className="project-app-name"><a className="project-app-name-link" href="/">Creatella E-Commerce</a></h2>
                        } 
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
                                    <label className="action-icon-cover-item" htmlFor="sort_price_radio" id="action-money-icon-cover" ref={sortPriceRadioLabelRef} >
                                        <Radio 
                                            checked={selectedValue == 'price'}
                                            className={selectedValue == 'price'? "action-icon-radio-btn action-icon-radio-btn-price" : "action-icon-radio-btn"} 
                                            onChange={handleRadioChange}
                                            value='price'
                                            name='action_icon_radio'
                                            id="sort_price_radio"
                                        />
                                        <div className="icon-cover">
                                            <AttachMoneyIcon className="action-icon" />
                                        </div>
                                        <div className="icon-subtitle-cover">
                                            <span className="icon-subtitle-span">Price</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="action-cover-item" id="action-size-cover">
                                <div className="action-icon-cover-flex">
                                    <label className="action-icon-cover-item" htmlFor="sort_size_radio" id="action-size-icon-cover" ref={sortSizeRadioLabelRef}>
                                        <Radio 
                                            checked={selectedValue == 'size'}
                                            className={selectedValue == 'size'? "action-icon-radio-btn action-icon-radio-btn-size" : "action-icon-radio-btn"} 
                                            onChange={handleRadioChange}
                                            value='size'
                                            name='action_icon_radio'
                                            id="sort_size_radio"
                                        />
                                        <div className="icon-cover">
                                            <FormatSizeIcon className="action-icon" />
                                        </div>
                                        <div className="icon-subtitle-cover">
                                            <span className="icon-subtitle-span">Size</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="action-cover-item" id="action-id-cover">
                                <div className="action-icon-cover-flex">
                                    <label className="action-icon-cover-item" htmlFor="sort_id_radio" id="action-list-icon-cover" ref={sortIdRadioLabelRef}>
                                        <Radio
                                            checked={selectedValue == 'id'}
                                            className={selectedValue == 'id'? "action-icon-radio-btn action-icon-radio-btn-id" : "action-icon-radio-btn"} 
                                            onChange={handleRadioChange}
                                            value='id'
                                            name='action_icon_radio'
                                            id="sort_id_radio"
                                        />
                                        <div className="icon-cover">
                                            <FilterListIcon className="action-icon" />
                                        </div>
                                        <div className="icon-subtitle-cover">
                                            <span className="icon-subtitle-span">ID</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </div>
    )
}
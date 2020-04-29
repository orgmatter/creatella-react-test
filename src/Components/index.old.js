import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allProducts } from '../Store/Actions/productsActions'; 
import { sortProducts } from '../Store/Actions/SortProductsActions';
import ProductCards from './productCards';
// import { withStyles } from '@material-ui/core/styles';
// import { styles } from './styles';
// import CircularProgress from '@material-ui/core/CircularProgress';

const uuid = require('uuid/v4');

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            limit: 16,
            totalPages: 16,
            isInitialProducts: false,
            scrolling: false,
        }
    }

    

    // document.querySelector(".component-home-container")

    // targetElementRef = React.createRef();

    loadMore = () => {
        const { allProducts } = this.props.allProductsState;
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: !prevState.scrolling,
        }))
        let actionParams = {
            page: this.state.page,
            limit: this.state.limit,
            isInitialProducts: true,
            initialProducts: allProducts,
        }
        this.props.allProducts(actionParams);
    }

    UNSAFE_componentWillMount () {        
        
        
    }

    handleScroll = (e) => {
        const { scrolling, totalPages, page } = this.state;

        if (scrolling) {
            return null;
        }
        // if (totalPages <= page) return;

        const lastProductCard = document.querySelector('div.product-cards-flex > div.product-cards-item:last-child');

        if(lastProductCard != null) {

            const lastProductCardOffset = lastProductCard.offsetTop + lastProductCard.clientHeight;
            const pageOffset = window.pageYOffset + window.innerHeight;
            var bottomOffset = 20;

            if (pageOffset > lastProductCardOffset - bottomOffset) {
                this.loadMore();
            }
        }
    }
    componentDidMount () {
        let fetchParams = {
            page: this.state.page,
            limit: this.state.limit,
            isInitialProducts: false,
            initialProducts: false,
        }
        this.props.allProducts(fetchParams);

        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e);
        })
        
        this.componentDidUpdate();
    }
    
    componentDidUpdate() {
        const lastProductCard = document.querySelector('div.product-cards-flex > div.product-cards-item:last-child');

        if(lastProductCard != null) {

            const lastProductCardOffset = lastProductCard.offsetTop + lastProductCard.clientHeight;
            const pageOffset = window.pageYOffset + window.innerHeight;
            var bottomOffset = 20;

            if (pageOffset > lastProductCardOffset - bottomOffset) {
                this.loadMore();
            }
        }
    }

    render () {
        const { allProducts, isLoaded, isLoading, status } = this.props.allProductsState;
        console.log(allProducts);
        // style={{height: "250vh", border: "1px solid green"}}



        if (isLoading) return (
            <div className="component-home-container">
                <p className="footer-title">Loading...</p>
            </div>
        )

        if (!isLoaded) return null;

        if (isLoaded) return (
            <div className="component-home-container">
                <div className="product-cards-flex">
                    { allProducts.map((product, index) => {
                        return (
                            <ProductCards key={uuid()} cardKey={uuid()} product={product}/>
                        )
                    }) }
                </div>
                {/* <div className="component-home-footer" id="footer-div" status="true" ref={el => this.targetElementRef = el}>
                    {/* <p className="component-footer-title">Loading...</p> *
                    {/* <a href="" onClick={this.loadMore} style={{color: "#ffffff", fontSize: "2rem"}}>Load More</a> *
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allProductsState: state.allProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allProducts: (limit) => dispatch(allProducts(limit)),
        sortProducts: (value) => dispatch(sortProducts(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
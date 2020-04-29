import { connect } from 'react-redux';
import { getProductAction } from '../Store/Actions/productsActions'; 
import { sortProducts } from '../Store/Actions/SortProductsActions';
import Home from './';


const mapStateToProps = (state) => {
    return {
        productState: state.productState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (productParams) => dispatch(getProductAction(productParams)),
        sortProducts: (value) => dispatch(sortProducts(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
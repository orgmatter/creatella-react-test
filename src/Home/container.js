import { connect } from 'react-redux';
import { getProductAction } from '../Store/Actions/productsActions'; 
import { sortProductAction } from '../Store/Actions/sortProductsActions';
import Home from './';


const mapStateToProps = (state) => {
    return {
        productState: state.productState,
        sortProductState: state.sortProductState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (productParams) => dispatch(getProductAction(productParams)),
        sortProducts: (sortParams) => dispatch(sortProductAction(sortParams)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
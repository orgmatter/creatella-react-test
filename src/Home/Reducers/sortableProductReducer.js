export const sortableProductReducer = (state, action) => {

    switch(action.type) {
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                fetchStatus: false,
                sortableStackProductData: state.sortableStackProductData.concat(action.payload),
                sortableProductData: action.payload
            }
        case 'FETCH_PRODUCT_FAILED':
            return {
                ...state,
                fetchStatus: false,
            }
        default:
            return state

    }
}
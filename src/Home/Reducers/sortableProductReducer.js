export const sortableProductReducer = (state, action) => {

    switch(action.type) {
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                fetchStatus: false,
                sortableProductData: state.sortableProductData.concat(action.payload)
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
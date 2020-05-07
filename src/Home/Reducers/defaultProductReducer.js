export const defaultProductReducer = (state, action) => {

    switch(action.type) {
        case 'FETCH_PRODUCT_BEGIN':
            return {
                ...state,
                fetchStatus: true,
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                fetchStatus: false,
                defaultProductData: state.defaultProductData.concat(action.payload)
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
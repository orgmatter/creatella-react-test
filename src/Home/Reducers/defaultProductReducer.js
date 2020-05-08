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
                defaultStackProductData: state.defaultStackProductData.concat(action.payload),
                defaultProductData: action.payload
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
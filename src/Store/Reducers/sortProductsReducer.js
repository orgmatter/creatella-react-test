import { sortProductsState as initialState } from '../state';

const sortProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SEND_SORT_PARAMS':

        return {
            ...state,
            btnClickStatus: action.payload,
            isSortable: action.isSortable
        }

        default: 
        return {
            ...state,
        }
    }
}

export default sortProductsReducer;
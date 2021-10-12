import {
    GET_CATEGORIES,
    PRODUCT_DETAIL,
} from '../constants';

const initialState = {
    categories: [],
    productDetail: {},
}

function productReducers(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload,
            }
        default:
            return state;
    }
}

export default productReducers;
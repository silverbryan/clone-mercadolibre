import {
    GET_CATEGORIES,
    PRODUCT_DETAIL,
    PAYMENT_LINK,
} from '../constants';

const initialState = {
    categories: [],
    productDetail: {},
    paymentLink: '',
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
        case PAYMENT_LINK:
            return {
                ...state,
                paymentLink: action.payload,
            }
        default:
            return state;
    }
}

export default productReducers;
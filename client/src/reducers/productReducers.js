import {
    GET_CATEGORIES,
    PRODUCT_DETAIL,
} from '../constants';

const initialState = {
    categories: [],
    productDetail: {},
    promotionalBanners: [
        {
            id: 1,
            link: 'https://http2.mlstatic.com/D_NQ_NP_673828-MLA44163917271_112020-F.jpg'
        }, {
            id: 2,
            link: 'https://http2.mlstatic.com/D_NQ_NP_738867-MLA44153640976_112020-F.jpg'
        }, {
            id: 3,
            link: 'https://http2.mlstatic.com/D_NQ_NP_764148-MLA44169695869_112020-F.jpg'
        }, {
            id: 4,
            link: 'https://http2.mlstatic.com/D_NQ_NP_720065-MLA42641653712_072020-F.jpg'
        }]
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
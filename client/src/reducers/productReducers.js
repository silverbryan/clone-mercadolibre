import {
    GET_CATEGORIES,
} from '../constants';

const initialState = {
    categories: []
}

function productReducers(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state;
    }
}

export default productReducers;
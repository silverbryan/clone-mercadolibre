import {
    SEARCH_BY_QUERY,
    SEARCH_ALL,
    SEARCH_BY_CATEGORY
} from '../constants';

const initialState = {
    recentResults: [],
    searchTerms: [],
}

function searchReducers(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case SEARCH_BY_QUERY:
            return {
                ...state,
                recentResults: action.payload
            }
        case SEARCH_BY_CATEGORY:
            return {
                ...state,
                results: action.results
            }
        case SEARCH_ALL:
            return {
                ...state,
                results: action.results
            }
        default:
            return state;
    }
}

export default searchReducers;
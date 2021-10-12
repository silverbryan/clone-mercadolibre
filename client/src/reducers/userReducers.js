import {
    SEARCH,
    FILTER_PRICE,
    FILTER_LOW_PRICE,
    FILTER_HIGH_PRICE,
    FILTER_CONDITION,
} from '../constants';

const initialState = {
    recentResults: {
        currentSearchTerm: '',
        currentSearchType: '',
        currentPage: 0,
        searchResults: []
    },
    results: [],
}

function searchReducers(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                recentResults: action.payload,
                results: action.payload.searchResults,
            }
        case FILTER_PRICE:
            return {
                ...state,
                recentResults: {
                    searchResults: state.results.filter(result => result.price < action.payload),
                }
            }
        case FILTER_LOW_PRICE:
            return {
                ...state,
                recentResults: {
                    searchResults: state.results.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)),
                }
            }
        case FILTER_HIGH_PRICE:
            return {
                ...state,
                recentResults: {
                    searchResults: state.results.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)),
                }
            }
        case FILTER_CONDITION:
            return {
                ...state,
                recentResults: {
                    searchResults: state.results.filter(result => result.condition === action.payload),
                }
            }
        default:
            return state;
    }
}

export default searchReducers;
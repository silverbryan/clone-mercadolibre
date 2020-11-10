import {
    SEARCH_BY_QUERY,
    SEARCH_BY_CATEGORY,
    SEARCH_IN_CACHE,
    FILTER_PRICE,
    FILTER_LOW_PRICE,
    FILTER_HIGH_PRICE,
    FILTER_CONDITION,
} from '../constants';

const initialState = {
    recentResults: { currentSearchTerm: '', searchResults: [] },
    searchTerms: [],
    results: [],
}

function searchReducers(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY_QUERY:
            return {
                ...state,
                recentResults: action.payload,
                searchTerms: [...state.searchTerms,
                {
                    key: action.payload.currentSearchTerm,
                    value: action.payload.searchResults
                }],
                results: action.payload.searchResults,
            }
        case SEARCH_BY_CATEGORY:
            return {
                ...state,
                recentResults: action.payload,
                searchTerms: [...state.searchTerms,
                {
                    key: action.payload.currentSearchTerm,
                    value: action.payload.searchResults
                }
                ],
                results: action.payload.searchResults,
            }
        case SEARCH_IN_CACHE:
            return {
                ...state,
                recentResults: {
                    currentSearchTerm: action.payload.key,
                    searchResults: action.payload.value,
                },
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
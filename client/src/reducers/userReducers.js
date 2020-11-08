import {
    SEARCH_BY_QUERY,
    SEARCH_BY_CATEGORY, SEARCH_IN_CACHE, FILTER_PRICE
} from '../constants';

const initialState = {
    recentResults: { currentSearchTerm: '', searchResults: [] },
    searchTerms: [],
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
                }
                ]
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
                ]
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
                    searchResults: state.recentResults.searchResults.filter(result => result.price < action.payload),
                }
            }
        default:
            return state;
    }
}

export default searchReducers;
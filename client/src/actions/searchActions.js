import axios from 'axios';
import {
    SEARCH,
    SEARCH_BY_QUERY,
    SEARCH_BY_CATEGORY,
    LOADING,
} from '../constants';

const API_URL = 'http://localhost:3001/api';

export const search = (query, page, type) => {
    let request = '';
    if (type === SEARCH_BY_CATEGORY) request = axios.get(API_URL + '/search?category=' + query + '&page=' + page);
    if (type === SEARCH_BY_QUERY) request = axios.get(API_URL + '/search?q=' + query + '&page=' + page);

    return async dispatch => {
        function setLoading(status) {
            dispatch({ type: LOADING, payload: status })
        }
        function success(data) {
            dispatch({
                type: SEARCH,
                payload: {
                    currentSearchTerm: query,
                    currentSearchType: type,
                    currentPage: page,
                    searchResults: data.results,
                }
            })
        }
        setLoading(true);
        const response = await request;
        success(response.data);
        setLoading(false);
    }
}
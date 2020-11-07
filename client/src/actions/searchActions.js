import axios from 'axios';
import {
    SEARCH_BY_QUERY,
    SEARCH_BY_CATEGORY,
    SEARCH_IN_CACHE,
} from '../constants';

export const searchByQuery = (cache, query, page) => (dispatch) => {
    let status = false;
    cache.map(search => {
        if (search.key === query) {
            dispatch({
                type: SEARCH_IN_CACHE,
                payload: search,
            })
            status = true;
            return;
        }
    })
    if (!status) {
        axios.get('http://localhost:3001/api/search?q=' + query + '&page=' + page)
            .then((res) => {
                dispatch({
                    type: SEARCH_BY_QUERY,
                    payload: {
                        currentSearchTerm: query,
                        searchResults: res.data.results
                    }
                });
            }).catch((err) => console.log(err))
    }

};

export const searchByCategory = (id, page) => dispatch => {
    axios.get('http://localhost:3001/api/search?category=' + id + '&page=' + page)
        .then(res => {
            dispatch({
                type: SEARCH_BY_CATEGORY,
                payload: {
                    currentSearchTerm: id,
                    searchResults: res.data.results,
                }
            })
        })
}
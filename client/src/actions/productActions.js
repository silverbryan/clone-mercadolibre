import axios from 'axios';

import {
    GET_CATEGORIES,
    LOADING,
    LOADING_PRODUCT,
    LOADING_CATEGORIES,
    PRODUCT_DETAIL,
    SEARCH,
    SEARCH_BY_QUERY,
} from '../constants';

export const getProductsHome = () => {
    const request = axios.get(`/api/search?q=black%20friday&page=0`);
    return async dispatch => {
        function setLoading(status) {
            dispatch({ type: LOADING, payload: status })
        }
        function success(data) {
            dispatch({
                type: SEARCH,
                payload: {
                    currentSearchTerm: 'black%20friday',
                    currentSearchType: SEARCH_BY_QUERY,
                    currentPage: 0,
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

export const getCategories = () => {
    const request = axios.get('/api/search/categorys');
    return async dispatch => {
        function setLoading(status) {
            dispatch({ type: LOADING_CATEGORIES, payload: status })
        }
        function success(data) {
            dispatch({
                type: GET_CATEGORIES,
                payload: data.results,
            })
        }
        setLoading(true);
        const response = await request;
        success(response.data);
        setLoading(false);
    }
}

export const getProductById = (id) => {
    const request = axios.get(`/api/products/${id}`);
    return async dispatch => {
        function setLoading(status) {
            dispatch({ type: LOADING_PRODUCT, payload: status })
        }
        function success(data) {
            dispatch({
                type: PRODUCT_DETAIL,
                payload: data.results,
            })
        }
        setLoading(true);
        const response = await request;
        success(response.data);
        setLoading(false);
    }
}
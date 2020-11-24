import axios from 'axios';

import {
    GET_CATEGORIES,
    LOADING,
    LOADING_CATEGORIES,
    PRODUCT_DETAIL,
    PAYMENT_LINK,
} from '../constants';

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
    const request = axios.get('/products/' + id);

    return async dispatch => {
        function setLoading(status) {
            dispatch({ type: LOADING, payload: status })
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

export const makePayment = productId => dispatch => {
    axios.post('/payments/new')
        .then(res => {
            dispatch({
                type: PAYMENT_LINK,
                payload: res.data.payment_link,
            })
        })
    //payments status
}

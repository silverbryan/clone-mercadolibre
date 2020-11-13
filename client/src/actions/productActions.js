import axios from 'axios';

import {
    GET_CATEGORIES,
    LOADING_CATEGORIES,
} from '../constants';

export const getCategories = () => {
    let request = axios.get('/api/search/categorys');

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
import axios from 'axios';

import {
    GET_CATEGORIES,
} from '../constants';

export const getCategories = () => dispatch => {
    axios.get('http://localhost:3001/api/search/categorys')
        .then(response => {
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data.results,
            })
        })
}
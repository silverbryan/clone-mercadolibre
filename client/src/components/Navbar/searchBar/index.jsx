import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { search } from '../../../actions/searchActions';
import { SEARCH_BY_QUERY } from '../../../constants';
import './SearchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cache = useSelector(state => state.user.searchTerms);

    const [searchTerm, setSearchTerm] = useState("");

    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const routeChange = () => {
        let path = `/search?q=${searchTerm}`;
        history.push(path);
    };

    return (
        <form
            className="searchBar__form"
            onSubmit={event => {
                event.preventDefault();
                if (searchTerm !== '') {
                    dispatch(search(searchTerm, 0, SEARCH_BY_QUERY));
                    routeChange();
                }
            }}
        >
            <input
                className="searchBar__input"
                type="text"
                name="search"
                onChange={handleOnChange}
                placeholder="Que estas buscando?"
            />
            <button type="submit" className="searchBar__button">
                Buscar
            </button>
        </form>
    );
}

export default SearchBar;
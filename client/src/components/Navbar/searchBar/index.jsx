import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import './SearchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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
            onSubmit={(event) => {
                event.preventDefault();
                if (searchTerm === "") {
                    dispatch(searchAll());
                } else {
                    dispatch(searchByQuery(searchTerm));
                }
                routeChange();
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
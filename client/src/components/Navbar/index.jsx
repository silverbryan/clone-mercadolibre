import React from 'react'
import SearchBar from './searchBar';

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="fixed-top">
            <SearchBar />
        </nav>
    );
}

export default Navbar;
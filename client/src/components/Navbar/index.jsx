import React, { useState } from 'react'
import SearchBar from './searchBar';
import HamburgerMenu from './hamburgerMenu';

import './Navbar.css'

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <nav className="navbar-principal fixed-top">
            <HamburgerMenu />
            <div className="navbar__brand">
                <img src="/mercado-libre-logo.svg" alt="mercadolibre icon" className="img-brand" />
            </div>
            <SearchBar />
        </nav>
    );
}

export default Navbar;
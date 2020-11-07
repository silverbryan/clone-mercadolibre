import React from 'react'
import SearchBar from './searchBar';
import HamburgerMenu from './hamburgerMenu';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar-principal fixed-top">
            <HamburgerMenu />
            <Link to="/">
                <div className="navbar__brand">
                    <img src="/mercado-libre-logo.svg" alt="mercadolibre icon" className="img-brand" />
                </div>
            </Link>

            <SearchBar />
        </nav>
    );
}

export default Navbar;
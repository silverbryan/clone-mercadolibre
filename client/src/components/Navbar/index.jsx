import React from 'react'
import SearchBar from './searchBar';
import HamburgerMenu from './hamburgerMenu';
import NavbarMenu from './navbarMenu';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar-principal fixed-top">
            <HamburgerMenu />
            <NavbarMenu />
            <Link to="/" className="navbar__brand">
                <img src="/mercado-libre-logo.svg" alt="mercadolibre icon" className="img-brand" />
            </Link>
            <SearchBar />
        </nav>
    );
}

export default Navbar;
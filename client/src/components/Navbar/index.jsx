import React, { useState } from 'react'
import SearchBar from './searchBar';
import { Col, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import HamburgerMenu from '../hamburgerMenu';

import './Navbar.css'

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <nav className="fixed-top">
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <SearchBar />
            <HamburgerMenu />
        </nav>
    );
}

export default Navbar;
import React, { useState } from 'react'

import './HamburgerMenu.css';

const HamburgerMenu = () => {

    const [active, setActive] = useState(false);

    const handleOnClick = event => {
        setActive(!active);
    }
    return (
        <nav className={active ? 'navbar-menu change' : 'navbar-menu'}>
            <div className="hamburger-menu" onClick={handleOnClick}>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default HamburgerMenu;
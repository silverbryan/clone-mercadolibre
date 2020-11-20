import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleNavbarMenu } from '../../../actions/applicationPropertiesActions';

import './HamburgerMenu.css';

const HamburgerMenu = () => {

    const dispatch = useDispatch();

    const handleOnClick = event => {
        dispatch(toggleNavbarMenu());
    }
    return (
        <div className="hamburger-menu" onClick={handleOnClick}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
        </div>
    );
}

export default HamburgerMenu;
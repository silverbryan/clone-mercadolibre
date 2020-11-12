import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Categories from '../../categories';
import SkeletonCategories from '../../skeletons/skeletonCategories';
import { toggleNavbarMenu } from '../../../actions/applicationPropertiesActions';

import './HamburgerMenu.css';

const HamburgerMenu = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.products.categories);
    const toggleNavbar = useSelector(state => state.appProperties.toggleNavbar);
    const isLoadingCategories = useSelector(state => state.appProperties.isLoadingCategories);

    const handleOnClick = event => {
        dispatch(toggleNavbarMenu());
    }
    return (
        <nav className={toggleNavbar ? 'navbar-menu change' : 'navbar-menu'}>
            <div className="hamburger-menu" onClick={handleOnClick}>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            <div className="navbar-brand-menu">
                <Link to="/" onClick={handleOnClick}>
                    <img src="/mercado-libre-logo.svg" alt="mercadolibre icon" className="img-brand" />
                </Link>
            </div>
            <div className="categorys-title">
                Categorias
            </div>
            <div className="categories__menu">
                {isLoadingCategories ? <SkeletonCategories /> : <Categories categories={categories} />}
            </div>
        </nav>
    );
}

export default HamburgerMenu;
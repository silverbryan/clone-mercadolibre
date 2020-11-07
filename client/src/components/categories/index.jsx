import React from 'react';
import { Link } from 'react-router-dom';
import { searchByCategory } from '../../actions/searchActions';
import { toggleNavbarMenu } from '../../actions/applicationPropertiesActions';
import { useDispatch } from 'react-redux';

import './Categories.css';

const Categories = ({ categories }) => {
    const dispatch = useDispatch();
    const handleOnClick = (id) => {
        dispatch(searchByCategory(id, 1));
        dispatch(toggleNavbarMenu());
    }
    return (
        <ul className="categories">
            {categories.map(category =>
                <Link
                    to={"/search?cat=" + category.name}
                    onClick={() => handleOnClick(category.id)}
                    key={category.id}
                >
                    <li className="category__item">
                        <div className="category__content">
                            <div className="category__image">
                                <img className="img-fill" src={category.image} alt="" />
                            </div>
                            <div className="category__title">
                                {category.name}
                            </div>
                        </div>
                    </li>
                </Link>
            )}
        </ul>
    );
}

export default Categories;
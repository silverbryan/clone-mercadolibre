import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    toggleModal,
    filterByRegularPrice,
    filterByMediumPrice,
    filterLowPrice,
    filterHighPrice,
    filterByNew,
    filterByUsed
} from '../../actions/applicationPropertiesActions';
import { PRECIO_MEDIO, PRECIO_REGULAR, FILTER_LOW_PRICE, FILTER_HIGH_PRICE, FILTER_NEW, FILTER_USED } from '../../constants';
import './Modal.css';

const Modal = () => {

    const dispatch = useDispatch();
    const toggle = useSelector(state => state.appProperties.toggleModal);
    const { type, name, children } = useSelector(state => state.appProperties.modalContent);

    const handleOnClick = item => {
        if (item === PRECIO_MEDIO) dispatch(filterByMediumPrice());
        if (item === PRECIO_REGULAR) dispatch(filterByRegularPrice());
        if (item === FILTER_LOW_PRICE) dispatch(filterLowPrice());
        if (item === FILTER_HIGH_PRICE) dispatch(filterHighPrice());
        if (item === FILTER_NEW) dispatch(filterByNew());
        if (item === FILTER_USED) dispatch(filterByUsed());
        dispatch(toggleModal());
    }

    return (
        <nav className={toggle ? 'modal-menu change' : 'modal-menu'}>
            <div className="modal__header">
                <div className="modal__icon" onClick={handleOnClick}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <div className="modal-brand-menu">
                    <Link to="/" onClick={handleOnClick}>
                        <img src="/mercado-libre-logo.svg" alt="mercadolibre icon" className="img-brand" />
                    </Link>
                </div>
            </div>
            <div className="modal__name">
                {name}
            </div>
            <div className="modal__content">
                <ul className="modal__items">
                    {children.map(item =>
                        <Link to="/search#filters" key={item.id} onClick={() => handleOnClick(item.id)}>
                            <li className="modal__link">{item.name}</li>
                        </Link>
                    )}
                </ul>

            </div>
        </nav>
    );
}

export default Modal;
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../actions/applicationPropertiesActions';
import './Modal.css';

const Modal = () => {

    const dispatch = useDispatch();
    const toggle = useSelector(state => state.appProperties.toggleModal);
    const { type, name, children } = useSelector(state => state.appProperties.modalContent);

    const handleOnClick = item => {

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
                        <Link to="/search#filter" key={item.id} onClick={() => handleOnClick(item.id)}>
                            <li className="modal__link">{item.name}</li>
                        </Link>
                    )}
                </ul>

            </div>
        </nav>
    );
}

export default Modal;
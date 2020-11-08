import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { MODAL_PRICE, MODAL_CONDITION } from '../../constants';
import { setModalPrice, setModalCondition, toggleModal } from '../../actions/applicationPropertiesActions';
import Modal from '../modal';

import './Filters.css';

const Filters = () => {
    const dispatch = useDispatch();

    const handleOnClick = type => {
        type === MODAL_PRICE ? dispatch(setModalPrice()) : dispatch(setModalCondition());
        dispatch(toggleModal());
    }

    return (
        <div className="filters__menu">
            <Row>
                <Col xs="6" lg="6">
                    <Link to="/search#filter" onClick={() => handleOnClick(MODAL_PRICE)}>
                        <div className="filter">
                            <div className="filter__icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-up" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                            <div className="filter__name">Precio</div>
                        </div>
                    </Link>
                </Col>
                <Col xs="6" lg="6">
                    <Link to="/search#filter" onClick={() => handleOnClick(MODAL_CONDITION)}>
                        <div className="filter">
                            <div className="filter__icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-list-ul" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </div>
                            <div className="filter__name">Condicion</div>
                        </div>
                    </Link>
                </Col>
            </Row>
            <Modal />
        </div>
    );
}

export default Filters;
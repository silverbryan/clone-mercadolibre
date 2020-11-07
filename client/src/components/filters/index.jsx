import React from 'react';
import { Col, Row } from 'reactstrap';

import './Filters.css';

const filters = () => {
    return (
        <div className="filters-menu">
            <Row>
                <Col lg="6">
                    <div className="filter__condition">
                        <div className="filter__icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                        <div className="filter__name">Precio</div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="filter__price">
                        <div className="filter__icon"></div>
                        <div className="filter__name">Condicion</div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default filters;
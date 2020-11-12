import React, { useEffect } from 'react'

import Catalogo from '../../components/catalogo';
import Categories from '../../components/categories';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getCategories } from '../../actions/productActions';

import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    const categories = useSelector(state => state.products.categories);
    return (
        <div className="homePage">
            <Container fluid={true} style={{ marginTop: '6rem' }}>
                <Row>
                    <Col lg="3">
                        <div className="categories__principal mt-5">
                            <Categories
                                categories={categories}
                            />
                        </div>
                    </Col>
                    <Col lg="9">
                        {/* <div className="catalogo mt-5">
                            <Catalogo
                                products={products}
                            />
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </div>



    );
}

export default HomePage;
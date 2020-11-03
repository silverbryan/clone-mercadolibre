import React from 'react'
import Catalogo from '../../components/catalogo';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import './HomePage.css';

const HomePage = () => {
    const products = useSelector(state => state.user.recentResults);

    return (
        <div className="homePage">
            <Container fluid={true} style={{ marginTop: '6rem' }}>
                <Row>
                    <Col lg="2">
                        Categorias
                </Col>
                    <Col lg="10">
                        <div className="catalogo mt-5">
                            <Catalogo
                                products={products}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>



    );
}

export default HomePage;
import React from 'react';
import ProductCard from '../productCard';
import { Container, Col, Row } from 'reactstrap';
import './Catalogo.css';

const Catalogo = ({ products }) => {
    return (
        <Container fluid={true}>
            <Row>
                {products.map(product =>
                    <Col lg="3" md="4" sm="6" key={product.id}>
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            currency_id={product.currency_id}
                            available_quantity={product.available_quantity}
                            thumbnail={product.thumbnail}
                            condition={product.condition}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Catalogo;
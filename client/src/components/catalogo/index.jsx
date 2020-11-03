import React from 'react';
import ProductCard from '../productCard';
import { Col, Row } from 'reactstrap';

const Catalogo = ({ products }) => {
    return (
        <Row>
            {products.map(product =>
                <Col lg="3">
                    <ProductCard
                        key={product.id}
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
    );
}

export default Catalogo;
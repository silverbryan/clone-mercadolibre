import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Pagination from '../../components/pagination';
import Catalogo from '../../components/catalogo';
import { useSelector } from 'react-redux'

const SearchPage = () => {
    const products = useSelector(state => state.user.recentResults.searchResults);
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
                <div className="content-pagination">
                    <Pagination />
                </div>
            </Container>
        </div>
    );
}

export default SearchPage;
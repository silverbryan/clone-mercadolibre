import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import FiltersMenu from '../../components/filters';
import Pagination from '../../components/pagination';
import Catalogo from '../../components/catalogo';
import Categories from '../../components/categories';
import { useSelector } from 'react-redux'

const SearchPage = () => {
    const products = useSelector(state => state.user.recentResults.searchResults);
    const categories = useSelector(state => state.products.categories);
    return (
        <div className="homePage">
            <Container fluid={true} style={{ marginTop: '6rem' }}>
                <FiltersMenu />
                <Row>
                    <Col lg="2">
                        <div className="categories__principal mt-5">
                            <Categories
                                categories={categories}
                            />
                        </div>
                    </Col>
                    <Col lg="10">
                        <div className="catalogo">
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
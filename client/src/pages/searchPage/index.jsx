import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import FiltersMenu from '../../components/filters';
import Pagination from '../../components/pagination';
import Catalogo from '../../components/catalogo';
import Categories from '../../components/categories';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'
import SkeletonProducts from '../../components/skeletons/skeletonProducts';
const SearchPage = () => {
    const products = useSelector(state => state.user.recentResults.searchResults);
    const categories = useSelector(state => state.products.categories);
    const isLoading = useSelector(state => state.appProperties.isLoading);
    return (
        <div className="homePage">
            <Container fluid={true} style={{ marginTop: '6rem' }}>
                <FiltersMenu />
                <Row>
                    <Col lg="3">
                        <div className="categories__principal">
                            <Categories
                                categories={categories}
                            />
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className="filters__principal">

                        </div>
                        <div className="catalogo">
                            {isLoading ? <SkeletonProducts /> : <Catalogo products={products} />}
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
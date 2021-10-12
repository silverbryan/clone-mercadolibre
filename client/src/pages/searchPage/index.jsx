import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import FiltersMenu from '../../components/filters';
import Pagination from '../../components/pagination';
import Catalogo from '../../components/catalogo';
import Categories from '../../components/categories';
import PrincipalFilters from '../../components/principalFilters';
import SkeletonProducts from '../../components/skeletons/skeletonProducts';
import SkeletonCategories from '../../components/skeletons/skeletonCategories';
import { useSelector } from 'react-redux'

const SearchPage = () => {
    const products = useSelector(state => state.user.recentResults.searchResults);
    const categories = useSelector(state => state.products.categories);
    const isLoading = useSelector(state => state.appProperties.isLoading);
    const isLoadingCategories = useSelector(state => state.appProperties.isLoadingCategories);

    return (
        <div className="homePage">
            <Container fluid={true} style={{ marginTop: '6rem' }}>
                <FiltersMenu />
                <Row>
                    <Col lg="3">
                        <div className="categories__principal">
                            {isLoadingCategories ? <SkeletonCategories /> : <Categories categories={categories} />}
                        </div>
                    </Col>
                    <Col lg="9">
                        <PrincipalFilters />
                        <div className="catalogo">
                            {isLoading ? <SkeletonProducts /> : <Catalogo products={products} />}
                        </div>
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    );
}

export default SearchPage;
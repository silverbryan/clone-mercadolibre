import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Catalogo from '../../components/catalogo';
import Categories from '../../components/categories';
import SkeletonCategories from '../../components/skeletons/skeletonCategories';
import SkeletonProducts from '../../components/skeletons/skeletonProducts';
import { getCategories, getProductsHome } from '../../actions/productActions';

import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProductsHome());
    }, [])

    const isLoading = useSelector(state => state.appProperties.isLoading);
    const isLoadingCategories = useSelector(state => state.appProperties.isLoadingCategories);
    const products = useSelector(state => state.user.recentResults.searchResults);
    const categories = useSelector(state => state.products.categories);

    return (
        <div className="homePage">
            <Container fluid={true} style={{ marginTop: '6rem' }}>
                <Row>
                    <Col lg="3">
                        <div className="categories__principal">
                            {isLoadingCategories ? <SkeletonCategories /> : <Categories categories={categories} />}
                        </div>
                    </Col>
                    <Col lg="9" style={{ marginTop: '2rem' }}>

                        {isLoading
                            ? <SkeletonProducts />
                            : <Catalogo products={products} />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;
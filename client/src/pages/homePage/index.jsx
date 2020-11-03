import React from 'react'
import Catalogo from '../../components/catalogo';
import { useSelector } from 'react-redux';
// import { Container } from 'reactstrap';
const HomePage = () => {

    const products = useSelector(state => console.log(state));

    return (
        <Catalogo
            products={products}
        />
    );
}

export default HomePage;
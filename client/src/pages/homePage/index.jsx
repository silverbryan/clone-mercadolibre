import React from 'react'
import Catalogo from '../../components/catalogo';
import { useSelector } from 'react-redux';

const HomePage = () => {
    console.log('mi pagina esrender')
    const products = useSelector(state => console.log(state));

    return (
        <Catalogo
            products={products}
        />
    );
}

export default HomePage;
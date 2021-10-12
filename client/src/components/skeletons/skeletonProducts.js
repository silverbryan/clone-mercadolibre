import React from 'react'
import Catalogo from '../catalogo';

const SkeletonProducts = () => {
    const createSkeleton = () => {
        const products = [];
        for (let i = 0; i < 12; i++) {
            products.push({
                id: i,
                title: '',
                price: '',
                thumbnail: '',
                currency_id: '',
            });
        }
        return products;
    }
    return (
        <Catalogo products={createSkeleton()} />
    );
}

export default SkeletonProducts;
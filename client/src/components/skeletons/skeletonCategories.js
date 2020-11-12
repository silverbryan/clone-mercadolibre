import React from 'react'
import Categories from '../categories';

const SkeletonCategories = () => {
    const createSkeleton = () => {
        const categories = [];
        for (let i = 0; i < 10; i++) {
            categories.push({
                id: i,
                name: '',
                image: '',
            });
        }
        return categories;
    }

    return (
        <Categories categories={createSkeleton()} />
    );
}

export default SkeletonCategories;
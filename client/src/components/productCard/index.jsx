import React from 'react'

const ProductCard = ({ title, price, currency_id, available_quantity, thumbnail, condition }) => {
    return (
        <div className="productCard">
            <div className="productCard__image">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="productCard__title">
                {title}
            </div>
            <div className="productCard__price">
                {price}
            </div>
        </div>
    );
}

export default ProductCard;
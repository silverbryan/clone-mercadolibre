import React from 'react'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import './ProductCard.css';

const ProductCard = ({ id, title, price, currency_id, available_quantity, thumbnail, condition }) => {
    return (
        <Link className="productCard__link" to={"/product/" + id}>
            <div className="productCard">
                {thumbnail === ''
                    ?
                    <Skeleton height={150} />
                    :
                    <div className="productCard__image">
                        <img className="img-fill" src={thumbnail} alt={title} />
                    </div>
                }
                {title === ''
                    ?
                    <Skeleton height={20} />
                    :
                    <div className="productCard__title">
                        {title.length > 40
                            ?
                            title.substring(0, 40) + '..'
                            :
                            title
                        }
                    </div>
                }
                {price === '' || currency_id === ''
                    ?
                    <Skeleton />
                    :
                    <div className="productCard__price">
                        $ {price + ' ' + currency_id}
                    </div>
                }
            </div>
        </Link>

    );
}

export default ProductCard;
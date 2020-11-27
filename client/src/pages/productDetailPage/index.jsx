import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../actions/productActions';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import './ProductDetail.css';
import Axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [id]);

    const handleOnClick = async e => {
        e.preventDefault();
        const result = await Axios.post(`/api/payments/new`, {
            title: product.name,
            quantity: 1,
            unit_price: product.price,
        })
        window.location.href = result.data.payment_link;
    }

    const isLoading = useSelector(state => state.appProperties.isLoadingProduct);
    const product = useSelector(state => state.products.productDetail);
    return (
        <Container fluid={true} className="productDetail">
            <Row>
                <Col lg="8">
                    <div className="productDetail__images">
                        {isLoading
                            ?
                            <div className="loading">Loading...</div>
                            :
                            <ImageGallery
                                items={product.images.map(image => {
                                    return {
                                        original: image.md,
                                        thumbnail: image.xs,
                                    }
                                })}
                                thumbnailPosition={"left"}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showNav={false}
                            />
                        }
                    </div>
                </Col>
                <Col lg="4">
                    <div className="productDetail__content">
                        <div className="productDetail__subtitle">
                            {product.condition + ' | ' + product.sold + ' vendidos'}
                        </div>
                        <div className="productDetail__title">
                            {product.title}
                        </div>
                        <div className="productDetail__price">
                            {'$ ' + product.price}
                        </div>
                        <div className="generic-sumary">
                            <div className="generic-sumary-icon">
                                <figure className="ui-pdp-media__figure">
                                    <svg className="color--black" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="nonzero" d="M17.8 7.61V5.8a.6.6 0 0 0-.6-.6H2.8a.6.6 0 0 0-.6.6v1.81h15.6zm0 1.2H2.2v5.39a.6.6 0 0 0 .6.6h14.4a.6.6 0 0 0 .6-.6V8.81zM2.8 4h14.4A1.8 1.8 0 0 1 19 5.8v8.4a1.8 1.8 0 0 1-1.8 1.8H2.8A1.8 1.8 0 0 1 1 14.2V5.8A1.8 1.8 0 0 1 2.8 4zm1.195 8.996l.002-1.2 4.204.007-.002 1.2-4.204-.007z"></path></svg>
                                </figure>
                            </div>
                            <div className="generic-sumary-content">
                                <h2 className="generic-sumary-title title--black">
                                    Paga en hasta 12 Cuotas
                                </h2>
                                <div className="productDetail__payments">
                                    <div class="ui-pdp-payment-sprites__icon-container">
                                        <div class="ui-pdp-payment-sprites__icon payments-small _visa-small"></div>
                                    </div>
                                    <div class="ui-pdp-payment-sprites__icon-container">
                                        <div class="ui-pdp-payment-sprites__icon payments-small _master-small"></div>
                                    </div>
                                    <div class="ui-pdp-payment-sprites__icon-container">
                                        <div class="ui-pdp-payment-sprites__icon payments-small _cabal-small"></div>
                                    </div>
                                    <div class="ui-pdp-payment-sprites__icon-container">
                                        <div class="ui-pdp-payment-sprites__icon payments-small _amex-small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="generic-sumary">
                            <div className="generic-sumary-icon">
                                <figure className="ui-pdp-media__figure">
                                    <svg className="color--green" xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"><path fill-rule="nonzero" d="M7.763 12.207a2.398 2.398 0 0 1-4.726 0H1.8a1.8 1.8 0 0 1-1.8-1.8V2.195a1.8 1.8 0 0 1 1.8-1.8h8.445a1.8 1.8 0 0 1 1.8 1.8v.568l3.322.035L18 6.821v5.386h-2.394a2.398 2.398 0 0 1-4.727 0H7.763zm-.1-1.2h3.182V2.195a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v8.212a.6.6 0 0 0 .6.6h1.337a2.399 2.399 0 0 1 4.526 0zm7.843 0H16.8V7.179l-2.086-3.187-2.669-.029v5.76a2.399 2.399 0 0 1 3.461 1.284zm-2.263 1.99a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396zm-7.843 0a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396z"></path></svg>
                                </figure>
                            </div>
                            <div className="generic-sumary-content">
                                <h2 className="generic-sumary-title title--green">
                                    Llega gratis mañana
                                </h2>
                                <div className="generic-sumary-subtitle">
                                    Beneficio Mercado Puntos
                                </div>
                            </div>
                        </div>
                        <div className="generic-sumary">
                            <div className="generic-sumary-icon">
                                <figure className="ui-pdp-media__figure">
                                    <svg className="color--green" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12"><path d="M2.474 7.2h7.225a2.7 2.7 0 1 0 0-5.4H7V.6h2.7a3.9 3.9 0 1 1 0 7.8H2.473l2.45 2.389-.839.859L.14 7.8l3.945-3.848.838.859L2.473 7.2z"></path></svg>
                                </figure>
                            </div>
                            <div className="generic-sumary-content">
                                <h2 className="generic-sumary-title title--green">
                                    Devolucion Gratis
                                </h2>
                                <div className="generic-sumary-subtitle">
                                    Tienes 30 dias desde que lo recibis.
                                </div>
                            </div>
                        </div>
                        <button onClick={handleOnClick} className="btn-buy">Comprar ahora</button>
                    </div>
                </Col>
            </Row >
        </Container >
    );
}

export default ProductDetail;
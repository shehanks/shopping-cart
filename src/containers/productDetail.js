import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axois from 'axios';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector((state) => state.product)
    const {title, description, image, price, category } = product;
    const fetchProduct = async () => {
        const response = await axois
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log('Err', err);
            });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId)
            fetchProduct();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ?
                (<div>...Loading</div>)
                :
                (
                    <div className='ui placeholder segment'>
                        <div className='ui two column stackable center aligned grid'>
                            <div className='ui vertical divider'>R</div>
                            <div className='middle aligned row'>
                                <div className='column rp'>
                                    <img className='ui fluid image' src={image} />
                                </div>
                                <div className='column rp'>
                                    <h1>{title}</h1>
                                    <h2>
                                        <a className='ui teal ag label'>${price}</a>
                                    </h2>
                                    <h3 className='ui brown block header'>{category}</h3>
                                    <p>{description}</p>
                                    <div className='ui vertica; animated button' tabIndex='0'>
                                        <div className='hidden content'>
                                            <i className='shop icon'></i>
                                        </div>
                                        <div className='visible content'>Add to cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>)
}

export default ProductDetail;
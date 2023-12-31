import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axois from 'axios';
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axois
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Err', err);
            });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>)
}

export default ProductListing;
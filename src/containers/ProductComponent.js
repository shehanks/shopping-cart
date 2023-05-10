import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const productList = products.map((product) => {
        const { id, title, images, price, category } = product;
        return (
            <div className='four wide column' key={id}>
                <Link to={`/product/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                            {
                                images !== null && images.length &&
                                <img src={images[0]} alt={title} />
                            }
                                
                            </div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>${price}</div>        
                                {
                                    category !== null &&
                                    <div className='meta'>
                                        <h4 className='header'>{category.name}</h4>
                                        </div>
                                } 
                            </div>
                        </div>
                    </div>
                </Link>
            </div>)
    });

    return (
        <>
            {productList}
        </>
    )
}

export default ProductComponent;
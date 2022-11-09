import React from 'react';
import '../style/Pages/_product.scss';
import Nav from '../components/Nav';

const Product = () => {
    return (
        <div className='body-margin'>
            <Nav />
            <h1>Hello from product</h1>
        </div>
    );
};

export default Product;
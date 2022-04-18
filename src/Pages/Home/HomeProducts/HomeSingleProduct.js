
import React from 'react';
import './Products.css';
const HomeSingleProduct = ({ product }) => {
    const { name, ratings, img } = product;
    console.log(product)
    return (
        <div className='col mb-5'>
            <div className="product-card">
                <div className="product-img">
                    <img src={img} className="product-img-top img-fluid rounded" alt="..." />
                    <p className='ratings'>Ratings: {ratings}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <button className='product-btn border-0'> READ MORE</button>
            </div>
        </div>
    );
};

export default HomeSingleProduct;
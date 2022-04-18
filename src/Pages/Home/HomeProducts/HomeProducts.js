import React, { useEffect, useState } from 'react';
import HomeSingleProduct from './HomeSingleProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json()).then(data => setProducts(data));
    }, []);
    return (
        <div className="container">
            <h1 className='mt-5 text-center text-primary fw-bold'>OUR PRODUCTS</h1>
            <div className='my-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto g-3'>
                {
                    products.map(product => <HomeSingleProduct
                        key={product.id}
                        product={product}
                    ></HomeSingleProduct>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;
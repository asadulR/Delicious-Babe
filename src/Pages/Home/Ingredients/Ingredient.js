import React from 'react';
import img from '../../../images/story image/home1-main-image-4.jpg';
import './Ingredient.css'
const Ingredient = () => {
    return (
        <section className='ingra'>
            <div className='container'>
            <div className='row g-2 align-items-center py-5'>
                <div className='col-12 col-md-7'>
                    <p className='mb-1'>TASTY AND CRUNCHY</p>
                    <h2 className='ing-title'>INGREDIENTS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor incidition ullam.</p>
                    <button className='border-0 py-3 ingra-btn px-5 my-4'>VIEW BLOGS</button>
                </div>
                <div className='col-12 col-md-5'>
                    <img className='img-fluid' src={img} alt="img" />
                </div>
            </div>
        </div>
        </section>
    );
};

export default Ingredient;
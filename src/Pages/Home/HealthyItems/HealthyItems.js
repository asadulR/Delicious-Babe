import React from 'react';
import icon1 from '../../../images/home icon/home1-main-icon1.png'
import icon2 from '../../../images/home icon/home1-main-icon2.png'
import icon3 from '../../../images/home icon/home1-main-icon3.png'
import icon4 from '../../../images/home icon/home1-main-icon4.png'

import './../Ingredients/Ingredient.css';

const HealthyItems = () => {
    return (
        <section className='healthyItems'>
            <div className="container">
                <div className="row g-3 py-5">
                    <div className="col-12 text-center col-md-6 col-lg-3">
                        <img src={icon1} alt="" />
                        <h6 className='mt-3 mb-3'>FRESH INGREDIENTS</h6>
                        <p className='text-gray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
                    </div>
                    <div className="col-12 text-center col-md-6 col-lg-3">
                        <img src={icon2} alt="" />
                        <h6 className='mt-3 mb-3'>HEALTHY MEALS</h6>
                        <p className='text-gray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
                    </div>
                    <div className="col-12 text-center col-md-6 col-lg-3">
                        <img src={icon3} alt="" />
                        <h6 className='mt-3 mb-3'>MEDITERRANEAN TASTE</h6>
                        <p className='text-gray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
                    </div>
                    <div className="col-12 text-center col-md-6 col-lg-3">
                        <img src={icon4} alt="" />
                        <h6 className='mt-3 mb-3'>EATING WELL</h6>
                        <p className='text-gray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthyItems;
import React from 'react';
import '../Menu.css'
import img from '../../../images/menu tab img/home1-main-tab-image1.jpg';
const Cheese = () => {
    return (
        <div className='row align-items-center'>
            <div className='col-12 col-md-8'>
                <h4 className='mb-5 lightgray'>TODAY’S BEST OFFER</h4>
                <p className='lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <p className='lightgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>
            <div className='col-12 text-center col-md-4'>
                <img className='img-fluid' src={img} alt="" />
            </div>
        </div>
    );
};

export default Cheese;
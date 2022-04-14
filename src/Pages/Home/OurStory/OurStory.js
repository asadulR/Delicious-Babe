import React from 'react';
import story1 from '../../../images/story image/home1-main-image-1.jpg';
import story2 from '../../../images/story image/home1-main-image-2.jpg';
import './OurStory.css'

const OurStory = () => {
    return (
        <div className='container my-5 py-5'>
            <div className='text-center story-div'>
                <p>TASTY AND CRUNCHY</p>
                <h2>OUR STORY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.</p>
            </div>
            <div className='row g-4'>
                <div className='col-12 col-md-6'><img className='img-fluid' src={story1} alt="" /></div>
                <div className='col-12 col-md-6'><img className='img-fluid' src={story2} alt="" /></div>
            </div>
        </div>
    );
};

export default OurStory;
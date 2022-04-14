import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopSlider.css'
import slider1 from '../../../images/top slider/main-home-slide1.jpg'
import slider2 from '../../../images/top slider/main-home-slide2n.jpg'
import slider3 from '../../../images/top slider/main-home-slide3.jpg'

const TopSlider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img-h"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='slider-caption'>
                        <p className='mb-0'><small className='small'>CRISPY AND SOFT</small></p>
                        <h2 className='slider-title'>DELICIOUS</h2>
                        <p className='slide-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, commodi?</p>
                        <button className='btn slide-btn bg-white py-2 px-3'>VIEW OUR MENU</button>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img-h"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='slider-caption'>
                        <p className='mb-0'><small className='small'>TASTY AND CRUNCHY</small></p>
                        <h3 className='slider-title'>RESTAURANT</h3>
                        <p className='slide-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className='btn slide-btn bg-white '>VIEW OUR MENU</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img-h"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='slider-caption'>
                        <p className='mb-0'><small className='small'>WIND AND DINE</small></p>
                        <h3 className='slider-title'>ENJOYABLE</h3>
                        <p className='slide-p'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button className='btn slide-btn bg-white'>VIEW OUR MENU</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopSlider;
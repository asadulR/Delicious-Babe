import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Menu.css';
const Menu = () => {
    return (
        <section className='menu-container mb-5'>
            <h2 className='text-center fw-bold py-5'><span className='salmon'>Explore</span> <span className='salmon2'>Delicious</span> <span className='salmon3'>Babe</span></h2>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-3'>
                        <div className='text-center custom-border text-md-start'>
                            <div className='tab-link'><CustomLink to='cheese'>CHEESE CROISSANTS</CustomLink></div>
                            <div className='tab-link'><CustomLink to='bruschetti'>BRUSCHETTI</CustomLink></div>
                            <div className='tab-link'><CustomLink to='vegetables'>AWESOME VEGETABLES</CustomLink></div>
                            <div className='tab-link'><CustomLink to='snacks'>TASTY SNACKS</CustomLink></div>
                            <div className='tab-link'><CustomLink to='all-time-best'>ALL-TIME BEST</CustomLink></div>
                            <div className='tab-link'><CustomLink to='family-meal'>MEAL FOR WHOLE FAMILY</CustomLink></div>
                        </div>
                    </div>


                    <div className='col-12 col-md-9'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
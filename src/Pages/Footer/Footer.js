import React from 'react';
import './Footer.css';
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'
import linkedin from '../../images/social/linkedin.png';
import google from '../../images/social/google.png';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col text-center text-lg-start">
                        <h2 className='s-color s-font'>Delicious Babe</h2>
                        <h5 className='text-white'>Best Food in your Town</h5>
                        <p className='line'>Boost up yourself</p>
                        <p className='text-white'>Email: asad1252001@gmail.com</p>
                    </div>
                    <div className="col text-center text-lg-start my-3">
                        <h4 className='s-color'>Open 24/7</h4>
                        <p className='mb-0 text-white'>Sed ut perspiciatis unde omnis iste natus</p>
                        <p className='mb-0 text-white'>error sit voluptatem accusantium</p>
                        <p className='text-white'>Eighth Avenue 487, New York</p>
                    </div>
                    <div className="col text-center my-4">
                        <h4 className='fw-bold mb-4 s-color'>Follow us</h4>
                        <a className='me-4' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><img className='img-size' src={github} alt="" /></a>
                        <a className='me-4' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><img className='img-size' src={google} alt="" /></a>
                        <a className='me-4' href="https://web.facebook.com/beingAsad.galib" target="_blank" rel="noopener noreferrer"><img className='img-size' src={facebook} alt="" /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><img className='img-size' src={linkedin} alt="" /></a>
                    </div>
                </div>
                <p className='text-center text-white'>Copyright &copy; {new Date().getFullYear()} All rights reserved. Developed by <a className='my-name-link' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer">Asadul Rahman</a></p> 
            </div>
        </footer>
    );
};

export default Footer;
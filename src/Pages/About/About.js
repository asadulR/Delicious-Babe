import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className='login-form-container'>
            <form class="containerr">
                <div class="brand-logoo"></div>
                <div class="brand-titlee">Delicious Babe</div>
                <div class="inputss">
                    <label className='labell'>EMAIL</label>
                    <input type="email" placeholder="example@test.com" />
                    <label>PASSWORD</label>
                    <input type="password" placeholder="Min 6 charaters long" />
                    <button className='s-button' type="submit">LOGIN</button>
                </div>
                <li>
                    services
                    <span></span><span></span><span></span><span></span>
                </li>
            </form>
        </div>
    );
};

export default About;
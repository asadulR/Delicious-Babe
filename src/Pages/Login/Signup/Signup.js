import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

import './../LoginStyle.css';
const Signup = () => {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate('/login')
    };
    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='text-center mb-5 fw-bold login-title'>Please Sign up</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control  required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control  required type="password" placeholder="Password" />
                    </Form.Group>
                    {/* {errorElement} */}

                    {/* <p className='mt-4'>New to Urban Car Service ? <Link className='signup-link' to='/signup'>Signup</Link></p> */}
                    <p className='mt-4 mb-1'>Already have an account ? <span onClick={handleGoToLogin}  className='signup-link'>Log in</span></p>
                    <div className='text-center mt-5'>
                        <Button className='login-btn py-2 fs-5 border-0' type="submit">
                            Sign up
                        </Button>
                    </div>
                </Form>
                {/* <Toaster /> */}
                <SocialLogin/>
            </div>
        </div>
    );
};

export default Signup;
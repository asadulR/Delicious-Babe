import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import './../LoginStyle.css';
const Login = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoteSignup = () =>{
        navigate('/signup');
    };

    if(loading){
        return <Loading/>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='text-center mb-5 fw-bold login-title'>Please Log in</h2>
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
                    <p className='mt-4 mb-1'>New to Delicious Babe ? <span onClick={handleGoteSignup} className='signup-link'>Sign up</span></p>
                    <span  className='my-0 pointer text-primary'>Forget password ?</span>
                    <div className='text-center mt-5'>
                        <Button className='login-btn py-2 fs-5 border-0' type="submit">
                            Log in
                        </Button>
                    </div>
                </Form>
                {/* <Toaster /> */}
                <SocialLogin/>
            </div>
        </div>
    );
};

export default Login;
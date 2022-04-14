import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './SocialLogin.css';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    let errorElement;







    if (error || errorFacebook) {
            errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }
      if (loading || loadingFacebook) {
        return <Loading/>;
      }

    return (
        <div>
        <div className='d-flex w-90 mx-auto align-items-center'>
            <div className='left-hr'></div>
            <p className='my-0 mx-3'>Or</p>
            <div className='right-hr'></div>
        </div>
        {errorElement}
        <div className='w-75 mx-auto'>
            <button onClick={() => signInWithGoogle()} className='w-100 btn btn-outline-primary my-2 btn-white'> <img className='me-3' src={google} alt="" />Log in with Google</button>
            <button onClick={() => signInWithFacebook()} className='w-100 btn btn-outline-primary my-2 btn-white'> <img className='me-3' width={30} src={facebook} alt="" />Log in with facebook</button>
            <button className='w-100 btn btn-outline-primary my-2 btn-white'> <img className='me-3' width={30} src={github} alt="" />Log in with GitHub</button>
        </div>
    </div>
    );
};

export default SocialLogin;
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/social/404.jpg';
const NotFound = () => {
  return (
    <section className='container my-5'>
      <div className='row row-cols-1 align-items-center row-cols-md-2'>
        <div className='col'>
          <h1 className='mb-4'>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className='mb-5'>
            You might have the wrong address, or the page may have moved.
          </p>
          <Link to='/' className='w-full mb-2 py-2 px-3 text-white bg-primary '>
            Back to homepage
          </Link>
        </div>
        <div className='col'>
          <div className=''>
            <img className='img-fluid'
              src={img}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound

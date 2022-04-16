import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'
const SingleBlog = ({ blog }) => {
    // console.log(blog);
    const { name, ratings, img, description } = blog;
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/home');
    }


    return (
        <div>
            <div className="col s-blog">
                <div className="card py-4 px-2">
                    <div className="img-container">
                        <img src={img} className="card-img-top blog-img rounded" alt="..." />
                        <p className='overly'>Ratings: {ratings}</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>

                    </div>

                    <button onClick={handleReadMore} className='read-more-btn'> READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
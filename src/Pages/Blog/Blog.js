import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SingleBlog from './SingleBlog';
import slidImg1 from '../../images/foods item img/chicken/port-gi-1.jpg';
import slidImg2 from '../../images/foods item img/chicken/port-gi-2.jpg';
import slidImg3 from '../../images/foods item img/chicken/port-gi-3.jpg';
import slidImg4 from '../../images/foods item img/chicken/port-gi-4.jpg';
import slidImg5 from '../../images/foods item img/chicken/port-gi-5.jpg';
import slidImg6 from '../../images/foods item img/chicken/port-gi-6.jpg';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json()).then(data => setBlogs(data));
    }, []);
    return (
        <section className='container'>
            <div className='slidebar py-5'>
                <Carousel fade variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slidImg1}
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <h3 className='text-white fw-bold'>Try some healthy Food</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slidImg2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-white fw-bold'>Seafood During Summer Days With Your Babe</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slidImg3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-white fw-bold'>Easy Grilled Fish and Shrimp Recipes</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slidImg4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-white fw-bold'>Fish Meals For The Whole Family</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slidImg5}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-white fw-bold'>Eat Well And Be Active Every Day</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slidImg6}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-white fw-bold'>Make Your Pasta Like You Are Italian</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h2 className='text-center fw-bolder text-primary'>BLOGS</h2>
            <div className='my-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto g-4'>
                {
                    blogs.map(blog => <SingleBlog
                        key={blog.id}
                        blog={blog}
                    ></SingleBlog>)
                }
            </div>
        </section>
    );
};

export default Blog;
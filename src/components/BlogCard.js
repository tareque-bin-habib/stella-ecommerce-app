import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../images/blog-1.jpg'

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className="blog-card">
                <div className="card-img">
                    <img src={blog1} className='img-fluid' alt="" />
                </div>
                <div className="blog-content">
                    <p className='date'>13 Feb 2023</p>
                    <h5 className='title'>A beautifull sunday morning  renaissance</h5>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas</p>
                    <Link to='' className='button'>Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
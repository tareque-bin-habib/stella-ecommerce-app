import React from 'react';
import blog1 from '../images/blog-1.jpg'

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className="blog-card">
                <div className="card-img">
                    <img src={blog1} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
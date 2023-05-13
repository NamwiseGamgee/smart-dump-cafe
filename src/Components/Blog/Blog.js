import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const { author_name, author_image, cover_image, title, readTime } = props.blog;
    // console.log('printing from blog.js ', blog);
    return (
        <div className='blog'>
            <div>
                <div>
                    <img className='cover_img' src={cover_image} alt="" />
                </div>
                <div className='author-info-container'>
                    <div className='author-date'>
                        <div>
                            <img className='author_img' src={author_image} alt="" />
                        </div>
                        <div>
                            <p>{author_name}</p>
                            <p><small>22/02/2023</small></p>
                        </div>
                    </div>
                    <div>
                        <p><small>{readTime} min read</small></p>
                    </div>
                </div>
                <div>
                    <h2>{title}</h2>
                    <button className='read-btn'>Mark as read</button>
                    <hr className='blog-hr' />
                </div>
            </div>
        </div>

    );
};

export default Blog;
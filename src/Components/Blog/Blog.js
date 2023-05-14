import React from 'react';
import './Blog.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBookReader } from '@fortawesome/free-solid-svg-icons'


const Blog = (props) => {
    const { author_name, author_image, cover_image, title, readTime } = props.blog;
    const bookmarkHandler = props.bookmarkHandler;
    const readHandler = props.readHandler;
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
                            <p className='name'>{author_name}</p>
                            <p><small>22/02/2023</small></p>
                        </div>
                    </div>
                    <div>
                        <p><small>{readTime} min read
                                <button onClick={ () => readHandler(readTime)} className='read-icon'><FontAwesomeIcon icon={faBookReader} /></button>
                        </small></p>
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <button onClick={() => bookmarkHandler(props.blog)} className='read-btn'>Bookmark</button>
                <hr className='blog-hr' />
            </div>
        </div>
        </div >

    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import './Content.css'
import Blog from '../Blog/Blog';

const Content = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    } , [])
    return (
        <div>
            <div className='content-container'>
                <div className='blog-container'>
                    {
                        blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.id}
                        ></Blog>)
                    }
                </div>
                <div className='secondary-grid'>
                    <div className='read'>
                        Spent time on read: 177 min
                    </div>
                    <div className='bookmarked'>
                        Bookmarked blogs:
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
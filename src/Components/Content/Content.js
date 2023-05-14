import React, { useEffect, useState } from 'react';
import './Content.css'
import Blog from '../Blog/Blog';
import BookedBlog from '../BookedBlog/BookedBlog';

const Content = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    const [bookedBlogs, setBookedBlogs] = useState([]);
    

    const bookmarkHandler = (blog) => {
        
        const lastBooked = [...bookedBlogs, blog];
        setBookedBlogs(lastBooked);
    }

    const [readTime, setReadTime] = useState(0);

    const readHandler = (time) => {
        let timeSum = readTime + time;
        setReadTime(timeSum);
    }

    return (
        <div>
            <div className='content-container'>
                <div className='blog-container'>
                    {
                        blogs.map(blog => <Blog
                            blog={blog}
                            bookmarkHandler={bookmarkHandler}
                            readHandler= {readHandler}
                            key={blog.id}
                        ></Blog>)
                    }
                </div>
                <div className='secondary-flex'>
                    <div className='read'>
                        Spent time on read: {readTime} min
                    </div>
                    <div className='bookmarked'>
                        <div className='booked-number'>
                            Bookmarked Blogs: {bookedBlogs.length}
                        </div>
                        {
                            bookedBlogs.map(bblog => <BookedBlog
                                title={bblog.title}
                                key={bblog.author_name}
                            ></BookedBlog>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
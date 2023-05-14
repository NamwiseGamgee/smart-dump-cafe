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
    // let newlyBookedBlog = [];

    // console.log(bookedBlogs);
    useEffect(() => {
        console.log("Printing from use effect", bookedBlogs);
    }, [bookedBlogs]);


    const readHandler = (blog) => {
        // console.log("yay you have clicked this blog: ",blog);
        const lastBooked = [...bookedBlogs, blog];
        setBookedBlogs(lastBooked);
    }



    return (
        <div>
            <div className='content-container'>
                <div className='blog-container'>
                    {
                        blogs.map(blog => <Blog
                            blog={blog}
                            readHandler={readHandler}
                            key={blog.id}
                        ></Blog>)
                    }
                </div>
                <div className='secondary-flex'>
                    <div className='read'>
                        Spent time on read: 177 min
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
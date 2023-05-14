import React from 'react';
import './BookedBlog.css'

const BookedBlog = (props) => {

    const title = props.title;

    return (
        <div className='showBooked-blog'>
            <div className='bookmarked-title'>
                <p>{title}</p>
            </div>
        </div>
    );
};


export default BookedBlog;
import React from 'react';
import './BookedBlog.css'

const BookedBlog = (props) => {

    const title = props.title;
    console.log(props);
    /* let count = 0;
    for(let p in props){
        count++;
        console.log("Props length: ",count);
    } */

    return (
        <div className='showBooked-blog'>
            <div className='bookmarked-title'>
                <p>{title}</p>
            </div>
        </div>
    );
};


export default BookedBlog;
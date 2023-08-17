import React from 'react';
import { useLoaderData } from 'react-router';


const NewsDetails = () => {
    const singleNews = useLoaderData();
    console.log(singleNews.data);

    const { title, image, content, author, updatedAt } = singleNews.data;
    return (
        <div className='container'>
            <h2>{title}</h2>
            <img src={image} alt="" /> <h2></h2>
            <p>{content}</p>
            <p><span className='fw-bold'> Author:</span> {author}  Created Time: {updatedAt.toString()}</p>
        </div>
    );
};

export default NewsDetails;
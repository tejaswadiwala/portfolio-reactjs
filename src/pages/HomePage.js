import React from 'react';
import Photo from '../photo.jpeg';


const HomePage = () => (
    <>
    <font color="#2F4F4F">
    <div>
    <img src={Photo} className="image-round" height="200" width="200" alt="TW"></img>
        <h1> Hello and Welcome to my website, I am Tejas Wadiwala</h1>
    </div>
    <h2>Software Developer | Master's in Computer Science</h2>
    <h3>Actively seeking full-time positions 
        starting Fall 2020</h3></font>

    </>
);

export default HomePage;
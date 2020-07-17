import React from 'react';
import Photo from '../photo.jpeg';


const HomePage = () => (
    <>
    <div>
    <img src={Photo} className="image-round" height="200" width="200" alt="TW"></img>
        <h1> Hello, I am Tejas Wadiwala</h1>
    </div>
    <h2>Software Developer | Master's in Computer Science</h2>
    <h3>Actively seeking full-time positions 
        starting Fall 2020</h3>
    </>
);

export default HomePage;
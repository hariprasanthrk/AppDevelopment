import React from 'react';
import {Link} from 'react-router-dom';


import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Real Estate Management</h1>
                <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                <p><button><a href='./Featured'>view</a></button></p>
                <form className='search'>
                </form>
                
                </div>
            </div>
        
        
        
    )
}

export default Hero
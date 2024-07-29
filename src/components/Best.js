import React from 'react';

import './Best.css';

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
                <button className='btn'>View All</button>
        </div>
    )
}

export default Best
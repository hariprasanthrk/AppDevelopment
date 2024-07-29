import React from 'react';

import './Featured.css';
import h1 from './house_img3.webp'
import b1 from './bed1.jpg'
import b11 from './bed3.jpg'
import ba1 from './bath1.jpg'
import ki1 from './k1.jpg'


import h2 from './house1.jpg'
import b2 from './bed2.jpg'
import b22 from './bed1.jpg'
import ba2 from './bath2.jpg'
import ki2 from './k2.jpg'


import h3 from './house2.jpg'
import b3 from './bed3.jpg'
import b33 from './bed2.jpg'
import ba3 from './bath3.jpg'
import ki3 from './k3.jpg'


import h4 from './house3.jpg'
import b4 from './bed1.jpg'
import b44 from './bed2.jpg'
import ba4 from './bath4.jpg'
import ki4 from './k1.jpg'




const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className='container'> 
            <img className='span-3 image-grid-row-2' src={h1} alt='' />
            <img src={b1} alt='' />
            <img src={b11} alt='' />
            <img src={ba1} alt='' />
            <img src={ki1} alt='' />
            
                     <div className='span-3 img-details'>
                    <div className='top'>
                        <h3>3rd Cross Street, Valasaravakkam, Chennai </h3>
                        <button><a href='./Details'>Contact</a></button>
                        <p className='price'>₹2,650,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>₹25,000/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='container'> 
            <img className='span-3 image-grid-row-2' src={h2} alt='' />
            <img src={b2} alt='' />
            <img src={b22} alt='' />
            <img src={ba2} alt='' />
            <img src={ki2} alt='' />
            
                     <div className='span-3 img-details'>
                    <div className='top'>
                        <h3> E.V.R.Street, Nesapakkam,Chennai</h3>
                        <button><a href='./Details'>Contact</a></button>
                        <p className='price'>₹2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>1</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>1</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>₹18,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='container'> 
            <img className='span-3 image-grid-row-2' src={h3} alt='' />
            <img src={b3} alt='' />
            <img src={b33} alt='' />
            <img src={ba3} alt='' />
            <img src={ki3} alt='' />
            
                     <div className='span-3 img-details'>
                    <div className='top'>
                        <h3>Mosque Street,Saidapet,chennai</h3>
                        <button><a href='./Details'>Contact</a></button>
                        <p className='price'>₹3,678,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>3</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>3</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>9,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>₹35,000/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        {/* Section section */}
        <div className='container'>
        <img className='span-3 image-grid-row-2' src={h4} alt='' />
            <img src={b4} alt='' />
            <img src={b44} alt='' />
            <img src={ba4} alt='' />
            <img src={ki4} alt='' />


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h3>Madambakkam, chennai</h3>
                        <button><a href='./Details'>Contact</a></button>
                        <p className='price'>₹4,667,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>4</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>4</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>10,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>₹54,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured
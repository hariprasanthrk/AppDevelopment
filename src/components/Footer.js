import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h2>About</h2>
            <p><h4>Real estate businesses such as property development companies, facility management or service-oriented companies, construction project management companies, and real estate agencies all require a real estate management system.</h4></p>
            <div className='container'>
                <div className='col'>
                    <h2>About</h2>
                    <br/>
                    <p>Company</p>
                    <br/>
                    <p>Details</p>
                    <br/>
                    <p>Planning</p>
                    <br/>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h2>Company</h2>
                    <br/>
                    <p>Company</p>
                    <br/>
                    <p>Details</p>
                    <br/>
                    <p>Planning</p>
                    <br/>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h2>Legal</h2>
                    <br/>
                    <p>Company</p>
                    <br/>
                    <p>Details</p>
                    <br/>
                    <p>Planning</p>
                    <br/>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h2>Information</h2>
                    <br/>
                    <p>Company</p>
                    <br/>
                    <p>Details</p>
                    <br/>
                    <p>Planning</p>
                    <br/>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
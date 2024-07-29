import React, { Component } from 'react';
import "./Details.css";

class Details extends Component {
  render() {
    return (
      <div className='detailsbody'>
      <div className="Details">
        <h2>Dealer's Details</h2>
        <form>
        <h3>Name: aslam</h3>
        <br/>
        <h3>Mail: aslam@gmail.com</h3>
        <br/>
        <h3>Contact : 98765433210</h3>
        <br/>
        <h3>Address: Gandhi nagar varasarvakkam chennai-600 001</h3>
        
          
        </form>

      </div>
      </div>
    )
  }
}

export default Details;
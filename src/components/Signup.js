import React, { Component } from 'react';
import "./Signup.css";

class Signin extends Component {
  render() {
    return (
      <div className='signupbody'>
      <div className="Signup">
        <h2>SignUp</h2>
        <form>
          <div className="text_area">
            <input
              type="username"
              id="username"
              name="username"
              placeholder="username"
              className="text_input"
              required

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              className="text_input"
              required

            />
          </div>
          <div className="text_area">
            <input
              
              id="Phone Number"
              name="Phone Number"
              placeholder='Phone Number'
              maxLength={10}
              className="text_input"
              required

            />
          </div>
          <button><a href='./Hero'>SignUp</a></button>

        </form>

      </div>
      </div>
    )
  }
}

export default Signin;
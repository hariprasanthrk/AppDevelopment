import React from 'react';
import {Link} from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
      <div className="Loginbody">
      <div className="Login">
        <h4>Login</h4>
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
              placeholder="password"
              className="text_input"
              required

            />
          </div>
          <div  classname='button'>
          <button><a href='./Hero'>Login</a></button>

          </div>
          <div className='register'>
            <br/>
            <br/>
            <Link to='/Signup'>SignUp</Link>
        </div>
        </form>

      </div>
      </div>
    )
  }

export default Login;
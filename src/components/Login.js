import React from 'react';
// Routing
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>
        <div>
          <img alt="Logo"/>
          MagicCards
        </div>
        <div>
          <div>Email</div>
          <div>Password</div>
        </div>
        <div>
          <div>
            Don't have an account? <Link to={`/apps`}>Register</Link>
            <Link to={`/apps`}><button>Login</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
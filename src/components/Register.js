import React from 'react';
// Routing
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div>
        <div>
          <img alt="Logo"/>
          MagicCards
        </div>
        <div>
          <div>Name</div>
          <div>Surname</div>
          <div>Email</div>
          <div>Password</div>
          <div>Repeat password</div>
        </div>
        <div>
          <div>
            Already have an account? <Link to={`/login`}>Login</Link>
            <Link to={`/Login`}><button>Submit</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
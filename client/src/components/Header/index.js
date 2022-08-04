import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const loggedIn = Auth.loggedIn();

  const logout = e => {
     Auth.logout()
  };

  return (
    <header className='container'>
      <div className='header'>
        <Link to="/">
          <h3>About</h3>
        </Link>
        <Link to="/staff">
          <h3>Staff</h3>
        </Link>
        <Link to="/questions">
          <h3>FAQs</h3>
        </Link>
        <Link to="/dashboard">
          <h3>Dashboard</h3>
        </Link>
        <Link to="/donate">
          <h3>Donate</h3>
        </Link>
        {!loggedIn?(
          <div>
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            <Link to="/signup">
              <h3>Signup</h3>
            </Link>
          </div>
        ):(
          <a href='/' onClick={logout}>Logout</a>
        )}  
      </div>
    </header>
  )
}

export default Header;
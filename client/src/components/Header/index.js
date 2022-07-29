import React from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

const Header = () => {

  const logout = e => {
    e.preventDefault()
    // Auth.logout()
  };

  return (
    <header>
      <div>
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
        {/* Add in an if statement for if theyre logged in or not. Render either login-signup or logout depending*/}
        <Link to="/loginsignup">
          <h3>LogIn/SignUp</h3>
        </Link>
        {/* <a href='/' onClick={logout}>Logout</a> */}
      </div>
    </header>
  )
}

export default Header;
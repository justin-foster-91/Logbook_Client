import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import LogoutPage from '../LogoutPage/LogoutPage'

const Header = (props) => {
  return props.isLoggedIn ? (
    <div className="header">
      <Link to='/logout'>
        Logout
      </Link>
    </div>
  ) : (
    <div className="header">
      <Link to='/signup'>
        Create Account
      </Link>
      {" | "}
      <Link to='/login'>
        Login
      </Link>
    </div>
  ) 

}

export default Header;
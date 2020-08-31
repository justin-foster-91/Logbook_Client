import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      <Link
        to='/signup'>
        Sign Up
      </Link>
    </div>
  );
}

export default Header;
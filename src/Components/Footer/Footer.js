import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
  return (
    <div className="Footer">
      <Link to="/about">About</Link>
    </div>
  );
}

export default Footer;
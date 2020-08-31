import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
// import SignupPage from '../SignupPage/SignupPage'

function LandingPage(props) {
  return (
    <div className="landingDisplay">
      <h1>
        {"Hello Landing Page"}
      </h1>
      <p>
        {"Filler text of super useful information that everyone needs to know about."}
      </p>
      <Link to='/signup' >
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default LandingPage;
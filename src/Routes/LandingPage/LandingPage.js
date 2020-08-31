import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
// import SignupPage from '../SignupPage/SignupPage'

function LandingPage(props) {
  return (
    <div className="landingDisplay">
      <div className="landingHeader">
        <h1>
          {"Hello Landing Page"}
        </h1>
      </div>
      <section className="landingBody">
        <h3>
          {"Introduction"}
        </h3>
        <p>
          {"Filler text of super useful information that everyone needs to know about."}
        </p>
        <Link to='/signup' >
          <button>Create Account</button>
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
// import SignupPage from '../SignupPage/SignupPage'

const LandingPage = (props) => {
  return (
    <div className="landingDisplay">
      <div className="landingHeader">
        <h1>
          Starfinder Logbook
        </h1>
      </div>
      <section className="landingBody">
        <h3>
          Select your ride
        </h3>
        <p className="introText">
          Welcome to Starfinder Logbook. 
          Currently, this app lets you login to or create an account, then create spaceships with default ship parts from the Starfinder tabletop game. 
          These are saved in your 'hangar' when you can see all of your ships and click any of them to be directed to a page that shows the ship parts specific to that ship. 
          On this page, you can select new parts from the dropdown menus and these changes will automatically be saved to the database. 
          If you don't want that ship anymore, you can select 'delete' and remove the ship from the database.
        </p>
        <Link to='/signup' >
          <button>Create Account</button>
        </Link>
      </section>
    </div>
  );
}

LandingPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default LandingPage;
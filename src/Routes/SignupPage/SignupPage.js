import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

function SignupPage(props) {
  return (
    <div className="signupDisplay">
      <div className="signupHeader">
        <h1>
          {"Hello Signup Page"}
        </h1>
      </div>
      <section className="signupBody">
        {/* TODO: Make confirm password require identical input to password */}
        <form>
          <label for="userName">Username:</label><br/>
          <input type="text"/>

          <label for="password">Password:</label><br/>
          <input type="text"/>

          <label for="passwordConf">Confirm Password:</label><br/>
          <input type="text"/>

          {/* TODO: Set up submit handle function */}
          <input type="submit" value="Sign Up" className="formButton"/>
        </form>

        <div className="formFooter">
          <p>Already have an account?</p>
          <p>
            <Link to="/login">
              Login here!
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default SignupPage;
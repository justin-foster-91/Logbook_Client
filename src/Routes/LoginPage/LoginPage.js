import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage(props) {
  return (
    <div className="loginDisplay">
      <div className="loginHeader">
        <h1>
          {"Hello Login Page"}
        </h1>
      </div>
      <section className="loginBody">
        <form>
          <label for="userName">Username:</label><br/>
          <input type="text"/>

          <label for="password">Password:</label><br/>
          <input type="text"/>

          {/* TODO: Set up submit handle function */}
          <input type="submit" value="Sign Up" className="formButton"/>
        </form>

        <div className="formFooter">
          <p>New to Starfinder Logger?</p>
          <p>
            <Link to="/signup">
              Signup here!
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
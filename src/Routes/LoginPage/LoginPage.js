import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import LoginForm from '../../Components/LoginForm/LoginForm';

const LoginPage = (props) => {
  
  const handleLoginSuccess = () => {
    const { history } = props
    history.push('/hangar')
  }
  
  return (
    <div className="loginDisplay">
      <div className="loginHeader">
        <h1>
          {"Hello Login Page"}
        </h1>
      </div>

      <section className="loginBody">
        <LoginForm
          onLoginSuccess={handleLoginSuccess}
        />
        {/* <form>
          <label htmlFor="userName">Username:</label><br/>
          <input type="text"/>

          <label htmlFor="password">Password:</label><br/>
          <input type="text"/>

          <input type="submit" value="Log In" className="formButton"/>
        </form> */}

        <div className="formFooter">
          <p>New to Starfinder Logbook?</p>
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

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
}

export default LoginPage;
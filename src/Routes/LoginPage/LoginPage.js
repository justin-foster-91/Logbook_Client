import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import LoginForm from '../../Components/LoginForm/LoginForm';

const LoginPage = (props) => {
  
  const handleLoginSuccess = () => {
    const { history } = props
    history.push('/hangar')
    // console.log("on login page");
    if(props.onLogin){
      // console.log("inside login if");
      props.onLogin(true);
    }
  }
  
  return (
    <div className="loginDisplay">
      <div className="loginHeader">
        <h1>
          {"Login Page"}
        </h1>
      </div>

      <section className="loginBody">
        <LoginForm
          onLoginSuccess={handleLoginSuccess}
        />

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
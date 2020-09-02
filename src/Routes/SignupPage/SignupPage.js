import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';
import SignupForm from '../../Components/SignupForm/SignupForm';

const SignupPage = (props) => {

  const handleRegistrationSuccess = user => {
    const { history } = props
    history.push('/login')
  }

  return (
    <div className="signupDisplay">
      <div className="signupHeader">
        <h1>
          {"Hello Signup Page"}
        </h1>
      </div>
      <section className="signupBody">
        <SignupForm 
          onRegistrationSuccess={handleRegistrationSuccess}
        />
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

SignupPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default SignupPage;
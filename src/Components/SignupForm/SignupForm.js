import React, { useState } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './SignupForm.css';

const SignupForm = (props) => {
  const [error, setError] = useState(null);

  // FIXME: Change hooks and change Input to html instead of Component.
  // TODO: I want to move the error message to the SignupPage. Maybe a pop-up tooltip?
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Hello World")
    const { username, password, passwordVerify } = e.target;

    if(password.value !== passwordVerify.value){
      // console.log("handleSubmit -> passwordVerify", passwordVerify)
      // console.log("handleSubmit -> password", password)
      setError("Password do not match");
      return;
    }

    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then(user => {
        console.log("New user submitted");
        username.value = ''
        password.value = ''
        passwordVerify.value = ''
        props.onSignupSuccess()
      })
      .catch(res => {
        setError(res.error);
      })
    }
  

    return (
    <>
      <div>
        <form
          className="SignupForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="userName">Username: </label><br/>
          <input className='username' type='text' required id='username'></input>

          <label htmlFor="password">Password:</label><br/>
          <input className='password' type='text' required id='password'></input>

          <label htmlFor="passwordVerify">Confirm Password:</label><br/>
          <input className='passwordVerify' type='text' required id='passwordVerify'></input>

          <input type="submit" value="Sign Up" className="formButton"/>
        </form>

      </div>
      <div role='alert'>
        {error ? <p className='red'>{error}</p> : null}
      </div>
    </>
  )
}

SignupForm.defaultProps = {
  onSignupSuccess: () => {}
}

export default SignupForm;
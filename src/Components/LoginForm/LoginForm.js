import React, { useState, useCallback } from 'react';
import { Input } from '../Utils/Utils';
import AuthApiService from '../../Services/auth-api-service';
import './LoginForm.css';

const LoginForm = (props) => {
  const [error, setError] = useState(null);

  // FIXME: Change hooks and change Input to html instead of Component.
  // TODO: I want to move the error message to the SignupPage. Maybe a pop-up tooltip?
  const handleSubmitJwtAuth = useCallback((e) => {
    e.preventDefault()

    this.setState({ error: null })
    const { username, password } = e.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(user => {
        console.log("Existing user logging in");
        username.value = ''
        password.value = ''
        props.onLoginSuccess()
      })
      .catch(res => {
        setError(res.error);
      })
    // FIXME: This part hates me
    },[setError] 
  )

    return (
    <>
      <div>
        <form
          className="SignupForm"
          onSubmit={(e) => handleSubmitJwtAuth(e)}
        >
          <label htmlFor="userName">Username: </label><br/>
          <Input
            name='username'
            type='text'
            required
            id='userName'
          >
          </Input>

          <label htmlFor="password">Password:</label><br/>
          <Input
            name='password'
            type='text'
            required
            id='password'
          >
          </Input>

          <input type="submit" value="Log In" className="formButton"/>
        </form>

      </div>
      <div role='alert'>
        {error ? <p className='red'>{error}</p> : null}
      </div>
    </>
  )

};

LoginForm.defaultProps = {
  onLoginSuccess: () => {}
}

export default LoginForm;
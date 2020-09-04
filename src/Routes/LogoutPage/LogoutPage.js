import React, { useEffect } from 'react';
import TokenService from '../../Services/token-service'

const LogoutPage = (props) => {

  const handleLogoutSuccess = () => {
    // TokenService.clearAuthToken()
    const { history } = props
    // history.push('/')
    console.log("on logout page");
    if(props.setIsLoggedIn){
      console.log("inside logout if");
      props.setIsLoggedIn(false);
    }
  }

  // handleLogoutSuccess()

  return (
    <div>
      <h1>{"Hello Logout Page"}</h1>
    </div>
  );
};

LogoutPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
}

export default LogoutPage;
import React from 'react';
import TokenService from '../../Services/token-service';

const LogoutPage = (props) => {

  const handleLogoutSuccess = () => {
    TokenService.clearAuthToken()
    const { history } = props
    history.push('/')
    // console.log("on logout page");
    if(props.setIsLoggedIn){
      // console.log("inside logout if");
      props.setIsLoggedIn(false);
    }
  }

  handleLogoutSuccess()

  return (
    <div>
      <h1>Logout Page</h1>
      <p>How did you even get here? That's not supposed to happen.</p>
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
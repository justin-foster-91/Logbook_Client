import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from "../../Routes/LandingPage/LandingPage";
import SignupPage from "../../Routes/SignupPage/SignupPage";
import LoginPage from "../../Routes/LoginPage/LoginPage";
import HangarPage from "../../Routes/HangarPage/HangarPage";
import CustomizePage from "../../Routes/CustomizePage/CustomizePage";
import AboutPage from "../../Routes/AboutPage/AboutPage";
import NotFoundPage from "../../Routes/NotFoundPage/NotFoundPage";
import IdleService from '../../Services/idle-service'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'


const App = () => {

  useEffect(() => {
    IdleService.setIdleCallback(logoutFromIdle)
    if (TokenService.hasAuthToken()) {

      IdleService.registerIdleTimerResets()

      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  },[])

  const logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    // FIXME: TypeError: undefined has no properties 
    this.forceUpdate()
  }

  return (
    <div className="App">
      <header className="App_header">
        <Header />
      </header>
      <main className="App_main">
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          {/* FIXME: Add PublicOnlyRoute back in and debug it */}
          <PublicOnlyRoute
            path={'/signup'}
            component={SignupPage}
          />
          <PublicOnlyRoute
            path={'/login'}
            component={LoginPage}
          />
          {/* FIXME: HangarPage is colored oddly. Also, should this be /hangar/:hangarId */}
          <PrivateRoute
            path={'/hangar'}
            component={HangarPage}
          />
          <PrivateRoute
            path={'/customize'}
            component={CustomizePage}
          />
          <Route
            path={'/about'}
            component={AboutPage}
          />
          <Route 
            component={NotFoundPage}
          />
        </Switch>
      </main>
      <footer className="App_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import SignupPage from './Routes/SignupPage/SignupPage'

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <Header />
        <Link
          to='/signup'>
          Sign Up
        </Link>
      </header>
      <Switch>
        <Route
          exact
          path={'/'}
          component={LandingPage}
        />
        <Route
          path={'/signup'}
          component={SignupPage}

        />
      </Switch>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import LandingPage from "../../Routes/LandingPage/LandingPage";
import SignupPage from "../../Routes/SignupPage/SignupPage";
import LoginPage from "../../Routes/LoginPage/LoginPage";
import HangarPage from "../../Routes/HangarPage/HangarPage";
import CustomizePage from "../../Routes/CustomizePage/CustomizePage";
import AboutPage from "../../Routes/AboutPage/AboutPage";
import NotFoundPage from "../../Routes/NotFoundPage/NotFoundPage";

const App = () => {
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
          <Route
            path={'/signup'}
            component={SignupPage}
          />
          <Route
            path={'/login'}
            component={LoginPage}
          />
          <Route
            path={'/hangar'}
            component={HangarPage}
          />
          <Route
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

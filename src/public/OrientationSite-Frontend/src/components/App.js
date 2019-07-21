/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import Nav from "./navigation/nav";
import Home from "./Home/Home";
import Maps from "./Maps/Maps";
import Contact from "./Contacts/Contacts";
import Books from "./Books/Books";
import TShirt from "./TShirt/TShirt";
import Login from "./Login/Login";
import { __esModule } from "reactstrap/lib/CardDeck";
import { Sugar, Planets } from "react-preloaders";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/404/NotFound";
import Calendars from "./Calendar/Calendar";

var helper = require("./helper");

class App extends Component {
  passUnique() {
    return new Date().toDateString() + Math.random();
  }
  render() {
    // console.log("1231341323");
    return (
      <div id="page-container">
        <Sugar
          animation="fade"
          time={200}
          color="black"
          background="linear-gradient(0deg, rgba(208,195,179,0.9) 0%, rgba(114, 152, 189, 0.9) 50%, rgba(44,43,59,0.9) 100%)"
        />

        <Router>
          <Nav key={this.passUnique()} />
          <br />

          <div id="content-wrap">
            <Switch>
              <Route exact path="/" component={Home} key={this.passUnique()} />
              <Route
                exact
                path="/home"
                component={Home}
                key={this.passUnique()}
              />
              <PrivateRoute exact path="/calendar" component={Calendars} />
              <Route exact path="/maps" component={Maps} />
              <Route exact path="/contacts" component={Contact} />
              <PrivateRoute
                exact
                path="/t-shirt-registration"
                component={TShirt}
              />
              <PrivateRoute exact path="/books" component={Books} />
              {/* {helper.isAuthenticated()?():()} */}
              <Route
                exact
                path="/login"
                render={props => (
                  <Login {...props} isAuthed={helper.isAuthenticated()} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;

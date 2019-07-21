import React, { Component } from "react";
import { EventEmitter } from "../events";

import "./nav.css";
import {
  NavLink
} from "react-router-dom";
var helper = require("../helper");

class Nav extends Component {
  constructor() {
    super();
    EventEmitter.subscribe("logout", this);
    EventEmitter.subscribe("login", this);
  }
  componentWillReceiveProps(newProps) {
    this.forceUpdate();
  }
  // state = {
  //   login: helper.isAuthenticated()
  // };
  logoutHandler = () => {
    // this.setState({ login: false });
    // helper.logout();
    localStorage.removeItem("user");
    EventEmitter.dispatch("logout");
    // this.forceUpdate();
  };

  componentDidMount = () => {
    // console.log("mounted, bitch");
  };
  // componentWillUnmount = () => {
  //   this.forceUpdate();
  // };
  renderHandler = () => {
    // this.forceUpdate();
  };
  render() {
    return (
      <header>
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top"
          role="navigation"
        >
          <div
            className="collapse navbar-collapse  w-100 order-1 order-md-0 dual-collapse2"
            id="navbarNav"
          >
            <ul className="nav navbar-nav">
              <li
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className="nav-item"
              >
                <NavLink to="/maps" className="nav-link">
                  Maps
                </NavLink>
              </li>
              <li
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className="nav-item"
              >
                <NavLink to="/calendar" className="nav-link">
                  Calendar
                </NavLink>
              </li>
              <li
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className="nav-item"
              >
                <NavLink to="/books" className="nav-link">
                  Books
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mx-auto order-0">
            <NavLink
              className="navbar-brand mx-auto rainbow-header logo-row "
              to="/home"
            >
              <img
                src="/images/logo-white.png"
                alt="Orientation'19"
                className="logo"
              />
            </NavLink>
          </div>
          <div
            className="collapse navbar-collapse w-100 order-2"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto justify-content-end">
              <li
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className="nav-item"
              >
                <NavLink to="/t-shirt-registration" className="nav-link">
                  T-Shirts
                </NavLink>
              </li>
              <li
                data-toggle="collapse"
                data-target=".navbar-collapse"
                className="nav-item"
              >
                <NavLink to="/contacts" className="nav-link">
                  Contacts
                </NavLink>
              </li>

              {helper.isAuthenticated() ? (
                <li
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  className="nav-item"
                >
                  <NavLink
                    className="nav-link"
                    onClick={this.logoutHandler}
                    to={{
                      pathname: "/",
                      message: "You have logged out successfully"
                    }}
                  >
                    <img
                      src="images/logout.svg"
                      alt="Logout"
                      height="40"
                      width="30"
                    />
                  </NavLink>
                </li>
              ) : (
                <li
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  className="nav-item"
                >
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle-navigation"
          >
            <span>
              <i className="fa fa-navicon" />
            </span>
          </button>
        </nav>
      </header>
    );
  }
}

export default Nav;

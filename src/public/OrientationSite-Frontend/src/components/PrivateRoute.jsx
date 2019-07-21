import React from "react";
import { Route, Redirect } from "react-router-dom";
var helper = require("./helper");
// import UserContainer from "../containers/UserContainer";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return helper.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", message: "You need to login first" }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;

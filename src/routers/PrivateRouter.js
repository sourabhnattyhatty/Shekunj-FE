import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

import { isAuthenticated, constants } from "../utils";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={`${constants.routingConstants.LOGIN}?redirect=${window.location.pathname}`}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

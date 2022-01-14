import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

import { isAuthenticated } from "../utils";

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
}

export default PublicRoute;

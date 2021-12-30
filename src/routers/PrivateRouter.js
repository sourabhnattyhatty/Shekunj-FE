import Cookies from "js-cookie";
import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

function PrivateRoute({ component: Component, ...rest }) {
  const token = Cookies.get("sheToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props}  {...rest}/>
        ) : (
          <Redirect to={`/login?redirect=${window.location.pathname}`} />
        )
      }
    />
  );
}

export default PrivateRoute;

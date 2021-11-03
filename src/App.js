import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PublicRoute from "./routers/PublicRouter";

const ForgotPage = React.lazy(() => import("./pages/ForgotPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const VerifyPage = React.lazy(() => import("./pages/VerifyPage"));
const VerifyEmail = React.lazy(() => import("./pages/VerifyEmailResult"));

function App() {
  return (
    <>
      <Switch>
        <PublicRoute exact path='/login' component={LoginPage} />

        <PublicRoute exact path='/signup' component={SignupPage} />

        <PublicRoute exact path='/forgot' component={ForgotPage} />

        <PublicRoute exact path='/verify' component={VerifyPage} />

        <PublicRoute exact path='/email-verify/:token' component={VerifyEmail} />

        <Route exact path='/' component={HomePage} />
      </Switch>
    </>
  );
}

export default App;

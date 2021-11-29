import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicRoute from "./routers/PublicRouter";


import "./App.css";

const ForgotPage = React.lazy(() => import("./pages/ForgotPage/ForgotPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage/SignupPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const About = React.lazy(() => import("./pages/About"));
const Career = React.lazy(() => import("./pages/Career"));
const Courses = React.lazy(() => import("./pages/Courses"));
const CoursesDetails = React.lazy(() => import("./pages/CoursesDetails"));
const CoursesModule = React.lazy(() => import("./pages/CoursesModule"));
const GuidancePage = React.lazy(() => import("./pages/GuidancePage"));
const CertificatePage = React.lazy(() => import("./pages/CertificatePage"));
const Verify = React.lazy(() => import("./pages/VerifyPage"));
const VerifyEmailResult = React.lazy(() => import("./pages/VerifyEmailResult"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));

function App() {
  return (
    <>
      <Switch>
        <PublicRoute exact path='/login' component={LoginPage} />

        <PublicRoute exact path='/signup' component={SignupPage} />

        <PublicRoute exact path='/forgot' component={ForgotPage} />

        <PublicRoute exact path='/verify' component={Verify} />

        <PublicRoute
          exact
          path='/authentication/email-verify/:token?'
          component={VerifyEmailResult}
        />

        <PublicRoute
          exact
          path='/authentication/password-reset/:uidb/:token/'
          component={ResetPassword}
        />

        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/career' component={Career} />
        <Route exact path='/Courses' component={Courses} />
        <Route exact path='/CoursesDetails/:id' component={CoursesDetails} />
        <Route exact path='/CoursesModule' component={CoursesModule} />
        <Route exact path='/GuidancePage' component={GuidancePage} />
        <Route exact path='/CertificatePage' component={CertificatePage} />
      </Switch>
    </>
  );
}

export default App;

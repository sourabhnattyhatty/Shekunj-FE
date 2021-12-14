import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicRoute from "./routers/PublicRouter";
import PrivateRoute from "./routers/PrivateRouter";

import "./App.css";

const ForgotPage = React.lazy(() => import("./pages/ForgotPage/ForgotPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage/SignupPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const About = React.lazy(() => import("./pages/About"));
const Career = React.lazy(() => import("./pages/Career"));
const Career1 = React.lazy(() => import("./pages/Career1"));
const Career2 = React.lazy(() => import("./pages/Career2"));
const Courses = React.lazy(() => import("./pages/Courses"));
const CoursesDetails = React.lazy(() => import("./pages/CoursesDetails"));
const CoursesModule = React.lazy(() => import("./pages/CoursesModule"));
const GuidanceBook = React.lazy(() => import("./pages/GuidanceBook"));
const CertificatePage = React.lazy(() => import("./pages/CertificatePage"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const CourseTest = React.lazy(() => import("./pages/CourseTest"));
const CourseResult = React.lazy(() => import("./pages/CourseResult"));
const CourseCertificate = React.lazy(() => import("./pages/CourseCertificate"));
const CertificateFullView = React.lazy(() => import("./pages/CertificateFullView"));
const SuccessStories = React.lazy(() => import("./pages/SuccessStories"));
const SuccessCareerTest = React.lazy(() => import("./pages/SuccessCareerTest"));
const SuccessCareerOption = React.lazy(() => import("./pages/SuccessCareerOption"));
const SuccessCareerOption2 = React.lazy(() => import("./pages/SuccessCareerOption/SuccessCareerOption2"));

function App() {
  return (
    <>
      <Switch>
        <PublicRoute exact path='/login' component={LoginPage} />
        <PublicRoute exact path='/signup' component={SignupPage} />
        <PublicRoute exact path='/forgot' component={ForgotPage} />
        <PublicRoute
          exact
          path='/authentication/password-reset/:uidb/:token/'
          component={ResetPassword}
        />

        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/career' component={Career} />
        <Route exact path='/career1' component={Career1} />
        <Route exact path='/career2' component={Career2} />
        <Route exact path='/Courses' component={Courses} />
        <Route exact path='/GuidanceBook' component={GuidanceBook} />
        <Route exact path='/CertificatePage' component={CertificatePage} />
        <Route exact path='/SuccessStories' component={SuccessStories} />
        <Route exact path='/SuccessCareerTest' component={SuccessCareerTest} />
        <Route exact path='/SuccessCareerOption' component={SuccessCareerOption} />
        <Route exact path="/success2" component={SuccessCareerOption2}/>

        <PrivateRoute
          exact
          path='/CoursesDetails/:id'
          component={CoursesDetails}
        />
        <PrivateRoute
          exact
          path='/CoursesModule/:id'
          component={CoursesModule}
        />

        <PrivateRoute exact path='/CoursesTest' component={CourseTest} />

        <PrivateRoute exact path='/CourseResult' component={CourseResult} />
        <PrivateRoute exact path='/CourseCertificate' component={CourseCertificate} />
        <PrivateRoute exact path='/CertificateFullView' component={CertificateFullView} />
      </Switch>
    </>
  );
}

export default App;

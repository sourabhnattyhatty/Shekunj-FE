import React from "react";
import { Route, Switch } from "react-router-dom";

import PublicRoute from "./routers/PublicRouter";
import PrivateRoute from "./routers/PrivateRouter";

import "./App.css";

const ForgotPage = React.lazy(() => import("./pages/ForgotPage/ForgotPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage/SignupPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const About = React.lazy(() => import("./pages/About"));
const Career = React.lazy(() => import("./pages/Career"));
const Career1 = React.lazy(() => import("./pages/Career1"));
const Career2 = React.lazy(() => import("./pages/Career2"));
const MyProfile = React.lazy(() => import("./pages/MyProfile"));
const Courses = React.lazy(() => import("./pages/Courses"));
const CoursesDetails = React.lazy(() => import("./pages/CoursesDetails"));
const CoursesModule = React.lazy(() => import("./pages/CoursesModule"));
const GuidanceBook = React.lazy(() => import("./pages/GuidanceBook"));
const CertificatePage = React.lazy(() => import("./pages/CertificatePage"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const CourseTest = React.lazy(() => import("./pages/CourseTest"));
const CourseResult = React.lazy(() => import("./pages/CourseResult"));
const CareerTestResult = React.lazy(() => import("./pages/CareerTestResult"));
const CourseCertificate = React.lazy(() => import("./pages/CourseCertificate"));
const CertificateFullView = React.lazy(() =>
  import("./pages/CertificateFullView"),
);
const SuccessStories = React.lazy(() => import("./pages/SuccessStories"));
const SuccessCareerTest = React.lazy(() => import("./pages/SuccessCareerTest"));
const SuccessCareerOption = React.lazy(() =>
  import("./pages/SuccessCareerOption"),
);
const MyProgress = React.lazy(() => import("./pages/MyProgress"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const AllCertificatePage = React.lazy(() => import("./pages/Certificates"));
const CertificateDetail = React.lazy(() =>
  import("./pages/Certificates/CertificatesDetail"),
);
const EmailPage = React.lazy(() => import("./pages/EmailPage"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const SuccessCareerOption2 = React.lazy(() =>
  import("./pages/SuccessCareerOption/SuccessCareerOption2"),
);
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

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
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/top-collages' component={Career} />
        <Route exact path='/top-schools' component={Career1} />
        <Route exact path='/government-exams' component={Career2} />
        <Route exact path='/Courses' component={Courses} />
        <Route exact path='/CoursesDetails' component={CoursesDetails} />
        <Route exact path='/myprofile' component={MyProfile} />
        <Route exact path='/GuidanceBook' component={GuidanceBook} />
        <Route exact path='/CertificatePage' component={CertificatePage} />
        <Route exact path='/SuccessStories' component={SuccessStories} />
        <Route exact path='/SuccessCareerTest' component={SuccessCareerTest} />
        <Route
          exact
          path='/SuccessCareerOption'
          component={SuccessCareerOption}
        />
        <Route exact path='/success2' component={SuccessCareerOption2} />
        <Route
          exact
          path='/all-certificate-page'
          component={AllCertificatePage}
        />
        <PrivateRoute
          exact
          path='/certificate-detail/:id'
          showButton={true}
          component={CertificateDetail}
        />
        <Route exact path='/ContactUs' component={ContactUs} />
        <Route exact path='/EmailPage' component={EmailPage} />
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
        <PrivateRoute exact path='/CoursesTest/:id' component={CourseTest} />
        <PrivateRoute exact path='/CourseResult/:id' component={CourseResult} />
        <PrivateRoute exact path='/CareerTestResult/:id' component={CareerTestResult} />
        <PrivateRoute
          exact
          path='/CourseCertificate/:id'
          component={CourseCertificate}
        />
        <PrivateRoute
          exact
          path='/CertificateFullView'
          component={CertificateFullView}
        />
        <PrivateRoute exact path='/my-progress' component={MyProgress} />
        <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;

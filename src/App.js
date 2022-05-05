import React from "react";
import { Route, Switch } from "react-router-dom";

import PublicRoute from "./routers/PublicRouter";
import PrivateRoute from "./routers/PrivateRouter";
import { routingConstants } from "./utils/constants";

import "./App.css";

const ForgotPage = React.lazy(() => import("./pages/ForgotPage/ForgotPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage/SignupPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const About = React.lazy(() => import("./pages/About"));
const Career = React.lazy(() => import("./pages/Career"));
const CareerDetails = React.lazy(() => import("./pages/CareerDetails"));
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
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));
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
        <PublicRoute
          exact
          path={routingConstants.LOGIN}
          component={LoginPage}
        />
        <PublicRoute
          exact
          path={routingConstants.SIGN_UP}
          component={SignupPage}
        />
        <PublicRoute
          exact
          path={routingConstants.FORGOT}
          component={ForgotPage}
        />
        <PublicRoute
          exact
          path={routingConstants.RESET_PASSWORD}
          component={ResetPassword}
        />
        <Route exact path={routingConstants.HOME_PAGE} component={HomePage} />
        <Route exact path={routingConstants.ABOUT} component={About} />
        <Route exact path={routingConstants.TOP_COLLEGES} component={Career} />
     
        <Route exact path={routingConstants.TOP_SCHOOLS} component={Career1} />
        <Route
          exact
          path={routingConstants.GOVERNMENT_EXAMS}
          component={Career2}
        />
        <Route exact path={routingConstants.COURSES} component={Courses} />
        <Route exact path={routingConstants.MY_PROFILE} component={MyProfile} />
        <Route
          exact
          path={routingConstants.GUIDANCE_BOOK}
          component={GuidanceBook}
        />
        <Route
          exact
          path={routingConstants.CERTIFICATE_PAGE}
          component={CertificatePage}
        />
        <Route
          exact
          path={routingConstants.SUCCESS_STORIES}
          component={SuccessStories}
        />
        <Route
          exact
          path={routingConstants.SUCCESS_CAREER_TEST}
          component={SuccessCareerTest}
        />
        <Route
          exact
          path={routingConstants.SUCCESS_CAREER_OPTION}
          component={SuccessCareerOption}
        />
        <Route
          exact
          path={routingConstants.SUCCESS_2}
          component={SuccessCareerOption2}
        />
        <Route
          exact
          path={routingConstants.ALL_CERTIFICATE_PAGE}
          component={AllCertificatePage}
        />
        <PrivateRoute
          exact
          path={`${routingConstants.ALL_CERTIFICATE_DETAIL}:id/:isDownload?`}
          component={CertificateDetail}
          showButton
          size='large'
        />
        <Route exact path={routingConstants.CONTACT_US} component={ContactUs} />
        <Route exact path={routingConstants.EMAIL_PAGE} component={EmailPage} />
        <PrivateRoute
          exact
          path={`${routingConstants.COURSE_DETAILS}:id`}
          component={CoursesDetails}
        />
        <PrivateRoute
          exact
          path={`${routingConstants.CAREER_DETAILS}:id`}
          component={CareerDetails}
        />
        <PrivateRoute
          exact
          path={`${routingConstants.COURSES_MODULE}:id`}
          component={CoursesModule}
        />
        <PrivateRoute
          exact
          path={`${routingConstants.COURSES_TEST}:id`}
          component={CourseTest}
        />
        <PrivateRoute
          exact
          path={`${routingConstants.COURSES_RESULT}:id`}
          component={CourseResult}
        />
        <PrivateRoute
          exact
          path={`${routingConstants.CAREER_TEST_RESULT}:id`}
          component={CareerTestResult}
        />
        <PrivateRoute
          exact
          path={`${routingConstants.COURSE_CERTIFICATE}:id`}
          component={CourseCertificate}
        />
        <PrivateRoute
          exact
          path={routingConstants.CERTIFICATE_FULL_VIEW}
          component={CertificateFullView}
        />
        <PrivateRoute
          exact
          path={routingConstants.MY_PROGESS}
          component={MyProgress}
        />
        <Route
          exact
          path={routingConstants.PRIVACY_POLICY}
          component={PrivacyPolicy}
        />
        <Route
          exact
          path={routingConstants.FORGOT_PASSWORD}
          component={ForgetPassword}
        />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;

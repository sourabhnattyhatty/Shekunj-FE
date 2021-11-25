import React from "react";

import "../Common.scss";

import Header from "../../components/Header";
import AuthContent from "../../components/AuthContent";
import Footer from "../../components/Footer";
import "./SignupPage.scss";

function SignupPage() {
  return (
    <>
      <div>
        <Header loginPage={true} />

        <AuthContent />

        <Footer loginPage={true} />
      </div>
    </>
  );
}

export default SignupPage;

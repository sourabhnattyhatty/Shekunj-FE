import React from "react";

import "../Common.scss";

import { Header, AuthContent, Footer, SEO } from "../../components";

import "./SignupPage.scss";

function SignupPage() {
  return (
    <>
      <div>
      <SEO title="Sheकुंज - Signup"/>
        <Header loginPage={true} />

        <AuthContent />

        <Footer loginPage={true} />
      </div>
    </>
  );
}

export default SignupPage;

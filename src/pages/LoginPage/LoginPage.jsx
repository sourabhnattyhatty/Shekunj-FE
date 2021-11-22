import React from "react";
import Header from "../../components/Header";
import AuthContent from "../../components/AuthContent";
import Footer from "../../components/Footer";

import "./LoginPage.scss";


function LoginPage({ p }) {

  return (
    <>
      <div>
        <Header loginPage={true} />

        <AuthContent loginPage={true} />

        <Footer loginPage={true} />
      </div>
    </>
  );
}

export default LoginPage;

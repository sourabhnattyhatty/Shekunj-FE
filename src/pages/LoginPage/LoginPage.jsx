import React from "react";
import { Header, AuthContent, Footer, SEO } from "../../components";
import "../../pages/responsive.scss";

import "./LoginPage.scss";

function LoginPage() {

  
  return (
    <>
      <div className="noselect">
        <SEO title='Sheकुंज - Login' />
        <Header loginPage={true} />

        <AuthContent loginPage={true} />

        <Footer loginPage={true} />
      </div>
    </>
  );
}

export default LoginPage;

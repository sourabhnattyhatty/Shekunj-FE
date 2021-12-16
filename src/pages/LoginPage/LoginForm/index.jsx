import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LoginTabs from "./LoginTabs";
import GoogleLoginComponent from "../../../components/GoogleLogin";

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='login_form'>
        <h2>{t("login.heading")}</h2>
        <p>
          {t("login.content")}{" "}
          <Link to='/signup' className='register'>
            {" "}
            {t("login.signupLink")}{" "}
          </Link>
        </p>

        <LoginTabs />

        <div className='text-center'>
          <p className='policy_para'>
            {t("login.T&C.content1")} <a href='#!'> {t("login.T&C.link1")} </a>{" "}
            , <a href='#!'> {t("login.T&C.link2")} </a>{" "}
            {t("login.T&C.content2")} <a href='#!'> {t("login.T&C.link3")} </a>
            {t("login.T&C.content3")}
          </p>
        </div>

        {/* <div class="or"><img src={} class="orimg" alt="..." /></div> */}

        <GoogleLoginComponent showOr={false} />
      </div>
    </>
  );
};

export default LoginForm;

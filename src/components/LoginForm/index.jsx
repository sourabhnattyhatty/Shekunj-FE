import React from "react";
import { Link } from "react-router-dom";
import LoginTabs from "../LoginTabs";
import { useTranslation } from "react-i18next";

import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";

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
            {t('login.T&C.content1')} <a href='#!'> {t('login.T&C.link1')} </a> ,{" "}
            <a href='#!'> {t('login.T&C.link2')} </a> {t('login.T&C.content2')} <a href='#!'> {t('login.T&C.link3')} </a>
            {t('login.T&C.content3')}
          </p>
        </div>

        <div className='text-center'>
          <div className='mt-3 mb-3'>
            <img src={Or} className='orimg' alt='...' />
          </div>
        </div>

        <button className='btn btn-google'>
          <img src={Google} alt='...' className='mr-2' /> {t('login.google')}
        </button>
      </div>
    </>
  );
};

export default LoginForm;

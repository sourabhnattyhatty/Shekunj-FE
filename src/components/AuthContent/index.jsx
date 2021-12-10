import React from "react";
import { useTranslation } from "react-i18next";

import Practical from "../../assets/images/login/1.png";
import Work from "../../assets/images/login/2.png";
import Hinglish from "../../assets/images/login/3.png";

import LoginForm from "../../pages/LoginPage/LoginForm";
import SignupForm from "../../pages/SignupPage/SignupForm";
import login from "../../assets/images/login.png";

import "./index.scss";

const AuthContent = ({ loginPage }) => {
  const { t } = useTranslation();

  return (
    <div className=''>
      <div
        className={
          loginPage ? "login_bg_main login_main mt-3" : "login_main mt-3"
        }
      >
        <div className='container logincontentbg'>
          <div className='row'>
            <div className='col-md-4'>
            <img className="girl_img" src={login} alt="" />
            </div>
            <div className='col-md-4'>
              <div className='login_content'>
                <h1>{t("login.authContent.heading")}</h1>

                <div className='mt-4'>
                  <div className='login_detail mb-2'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <div className='login-content-img'>
                          <img src={Practical} alt='...' />
                        </div>
                      </div>

                      <div className='col-md-10'>
                        <div className='login-content-right'>
                          <h5 className='mt-1'>
                            {t("login.authContent.content1.heading")}
                          </h5>
                          <p>{t("login.authContent.content1.cont")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='login_detail mb-2'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <div className='login-content-img'>
                          <img src={Work} alt='...' />
                        </div>
                      </div>

                      <div className='col-md-10'>
                        <div className='login-content-right'>
                          <h5 className='mt-1'>
                            {t("login.authContent.content2.heading")}
                          </h5>
                          <p>{t("login.authContent.content2.cont")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='login_detail mb-3'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <div className='login-content-img'>
                          <img src={Hinglish} alt='...' />
                        </div>
                      </div>

                      <div className='col-md-10'>
                        <div className='login-content-right'>
                          <h5 className='mt-1'>
                            {t("login.authContent.content3.heading")}
                          </h5>
                          <p className='mb-0'>
                            {t("login.authContent.content3.cont")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              {loginPage ? <LoginForm /> : <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;

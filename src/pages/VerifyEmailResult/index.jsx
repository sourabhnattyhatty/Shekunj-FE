import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ShekujLogo from "../../assets/icons/logo.svg";
import { emailVerify } from "../../store/auth/action";
import { useTranslation } from "react-i18next";
import './index.scss'

function VerifyEmailResult() {
  const dispatch = useDispatch();
  const urlParam = new URLSearchParams(window.location.search);
  const token = urlParam.get("token");

  const {t} = useTranslation();

  useEffect(() => {
    dispatch(emailVerify(token)).then((res) => {
        console.log(res);
    });
  }, [token]);

  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-sm-2 col-md-2'></div>
          <div className='col-sm-8 col-md-8'>
            <img src={ShekujLogo} alt='...' />
            <hr />
            <h2 className='text-center'>{t('verifyResult.heading')}</h2>
            <div className='text-center'>
              <h6 className='my-5'>
                <b>{t('verifyResult.heading1')}</b> {t('verifyResult.heading2')}
              </h6>
              <Link className='logIn' to='/login'> {t('verifyResult.button')}</Link>
            </div>
          </div>
          <div className='col-sm-2 col-md-2'></div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmailResult;

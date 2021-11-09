import React from "react";
import "./index.scss";
import ShekujLogo from '../../assets/icons/logo.svg'
import { useTranslation } from "react-i18next";

function Verify() {
  const eMail = localStorage.getItem('email');

  const {t} = useTranslation();

  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-sm-2 col-md-2'></div>
          <div className='col-sm-8 col-md-8'>
            <img src={ShekujLogo} alt='...' />
            <hr />
            <h2>{t('verify.heading')}</h2>
            <h6 className='my-5'>{t('verify.heading2')}</h6>
            <h6>
              {t('verify.content',{email:eMail})}
            </h6>
          </div>
          <div className='col-sm-2 col-md-2'></div>
        </div>
      </div>
    </>
  );
}

export default Verify;

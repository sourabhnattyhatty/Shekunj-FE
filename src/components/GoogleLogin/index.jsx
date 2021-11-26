import React from "react";
import { useTranslation } from "react-i18next";
import { GoogleLogin } from "react-google-login";

import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";
import { useDispatch } from "react-redux";
import { registerWithGoogle } from "../../store/auth/action";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function GoogleLoginComponent({ showOr }) {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();

  const responseGoogle = (res) => {
    if (res && res.tokenId) {
      dispatch(registerWithGoogle({ auth_token: res.tokenId }, history));
    }else{
      toast.error('Google login failed.');
    }
  };
  return (
    <>
      <div className='text-center'>
        <GoogleLogin
          clientId={clientId}
          onSuccess={(res) => responseGoogle(res)}
          onFailure={(res) => responseGoogle(res)}
          render={(renderProps) => (
            <>
              <button
                className='btn btn-google'
                onClick={() => renderProps.onClick()}
                disabled={renderProps.disabled}
              >
                <img src={Google} alt='...' className='mr-2' />{" "}
                {t("login.google")}
              </button>
              {showOr && (
                <div className='or'>
                  <img src={Or} className='orimg' alt='...' />
                </div>
              )}
            </>
          )}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </>
  );
}

export default GoogleLoginComponent;

import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";
import { registerWithGoogle } from "../../store/auth/action";
import { useTranslation } from "react-i18next";

function GoogleLoginComponent({ showOr }) {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const redirect = query.get("redirect");

  const responseGoogle = (res) => {
    if (res && res.tokenId) {
      dispatch(
        registerWithGoogle({ auth_token: res.tokenId }, history, redirect),
      );
    }
  };

  return (
    <>
      <div className='text-center noselect'>
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
                <img src={Google} alt='...' className='mr-2' style={{width:20,height:20}} /> {t("googleLoginComponent.button.1")}
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

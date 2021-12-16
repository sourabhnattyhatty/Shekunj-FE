import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "../LanguageButton";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/icons/search.png";
import close from "../../assets/icons/x.png";

import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut, refreshPage } from "../../store/auth/action";

const Header = ({ loginPage, page }) => {
  const [searchValue, setSearchValue] = useState("");
  const { t } = useTranslation();
  const { isAuth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(refreshPage());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logOut(history));
  };

  return (
    <div>
      <header className='other_head'>
        <div className='container'>
          <div className='topbar'>
            <div className='row'>
              <div className='col-md-3'>
              <div className="sign_in">
                <Link className='navbar-brand' to='/'>
                  <img src={Logo} alt='...' />
                </Link>
                
                  <p>Sign In</p>
                </div>
              </div>

              <div className='col-md-9 pl-md-0 pl-lg-2 text-right'>
                <div
                  id='custom-search-input'
                  className='mt-lg-3 mt-md-1 d-inline-block'
                >
                  <div className='input-group'>
                    <input
                      type='text'
                      className='search-query form-control'
                      placeholder={t("header.searchPlaceholder")}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <span className='input-group-btn'>
                      <button type='button' disabled>
                        <img src={Search} alt='...' />
                      </button>
                    </span>
                  </div>
                </div>

                <div className='top_bar_btn d-inline-block'>
                  {isAuth ? (
                    <button
                      className='btn btn-bg-pink ml-xl-3 ml-md-2'
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      className='btn btn-bg-pink ml-xl-3 ml-md-2'
                      to='/login'
                    >
                      {t("header.authButton")}
                    </Link>
                  )}

                  <div className='set_language d-inline-block ml-xl-3 ml-md-2'>
                    <ChangeLanguageButton />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='middle_nav_login'>
            <nav className='navbar navbar-expand-md'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#collapsibleNavbar'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                <button
                  className='navbar-toggler close_set'
                  type='button'
                  data-toggle='collapse'
                  data-target='#collapsibleNavbar'
                >
                  <img src={close} alt="" />
                </button>
                <ul className='navbar-nav'>
                  <li
                    className={
                      page === "about" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className='nav-link' to='/about'>
                      {t("header.heading.1")}
                    </Link>
                  </li>
                  <li
                    className={
                      page === "courses" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className='nav-link' to='/courses'>
                      {t("header.heading.2")}
                    </Link>
                  </li>
                  <li
                    className={
                      page === "guidance" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className='nav-link' to='/GuidanceBook'>
                      {t("header.heading.3")}
                    </Link>
                  </li>
                  <li
                    className={
                      page === "resume" ? "nav-item active" : "nav-item"
                    }
                  >
                    <a
                      className='nav-link'
                      rel='noreferrer'
                      href='https://octahire.com/Resume_maker'
                      target='_blank'
                    >
                      {t("header.heading.4")}
                    </a>
                  </li>
                  <li
                    className={
                      page === "career" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className='nav-link' to='/career'>
                      {t("header.heading.5")}
                    </Link>
                  </li>

                  <li
                    className={page === "jobs" ? "nav-item active" : "nav-item"}
                  >
                    <a
                      className='nav-link'
                      rel='noreferrer'
                      target='_blank'
                      href='https://octahire.com/Recruiters/job_recruiters?location='
                    >
                      {t("header.heading.6")}
                    </a>
                  </li>

                  <li
                    className={
                      page === "blogs" ? "nav-item active" : "nav-item"
                    }
                  >
                    <a
                      className='nav-link'
                      rel='noreferrer'
                      target='_blank'
                      href='http://www.thehrnotes.com/'
                    >
                      {t("header.heading.7")}
                    </a>
                  </li>

                  <li
                    className={
                      page === "story" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className='nav-link' to='/SuccessStories'>
                      {t("header.heading.8")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

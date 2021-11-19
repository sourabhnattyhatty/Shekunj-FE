import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "../LanguageButton";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/icons/search.png";

import "./index.scss";

const Header = ({ loginPage }) => {
  const [searchValue, setSearchValue] = useState("");
  const { t } = useTranslation();

  return (
    <div>
      <header className='other_head'>
        <div className='container'>
          <div className='topbar'>
            <div className='row'>
              <div className='col-md-3'>
                <Link className='navbar-brand' to="/">
                  <img src={Logo} alt='...' />
                </Link>
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
                  <Link className='btn btn-bg-pink ml-xl-3 ml-md-2' to="/login">
                    Login/Register
                  </Link>

                  <div className='set_language d-inline-block ml-xl-3 ml-md-2'>
                    <ChangeLanguageButton />
                  </div>
                  {/* {loginPage && (
                    <button className='btn btn-bg-black ml-xl-3 ml-md-2'>
                      Start Course
                    </button>
                  )}

                  {!loginPage && (
                    <>
                      <button className='btn btn-bg-pink ml-xl-3 ml-md-2'>
                        Login/Register
                      </button>

                      <div className='set_language d-inline-block ml-xl-3 ml-md-2'>
                        <ChangeLanguageButton />
                      </div>
                    </>
                  )} */}
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
                <ul className='navbar-nav'>
                  <li className='nav-item active'>
                    <Link className='nav-link' to='/about'>
                      {t("header.heading.1")}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/courses'>
                      {t("header.heading.2")}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/guidance'>
                      {t("header.heading.3")}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/resume_builder'>
                      {t("header.heading.4")}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/career'>
                      {t("header.heading.5")}
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link' to='/jobs'>
                      {t("header.heading.6")}
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link' to='/blogs'>
                      {t("header.heading.7")}
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link' to='/success_story'>
                      {t("header.heading.8")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* <div className="logo_2">
          <img src={TitleIcon} alt="..." />
        </div>

        <div className="set_form">
          <input
            type="text"
            className="search_input"
            placeholder={t('header.searchPlaceholder')}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Link to="/login">
            <button className="login_register">{t('header.courseButton')}</button>
          </Link>
        </div>

        <div className="set_language">
          <ChangeLanguageButton />
        </div> */}
      </header>

      {/* <div className="headings">
        <Link to="/about">{t('header.heading.1')}</Link>
        <Link to="/courses">{t('header.heading.2')}</Link>
        <Link to="/guidance">{t('header.heading.3')}</Link>
        <Link to="/resume_builder">{t('header.heading.4')}</Link>
        <Link to="/career">{t('header.heading.5')}</Link>
        <Link to="/jobs">{t('header.heading.6')}</Link>
        <Link to="/blogs">{t('header.heading.7')}</Link>
        <Link to="/success_story">{t('header.heading.8')}</Link>
      </div> */}
    </div>
  );
};

export default Header;

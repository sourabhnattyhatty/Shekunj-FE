import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/whitelogo.svg";
import LogoBlack from "../../assets/images/logo.svg";
import ChangeLanguageButton from "../LanguageButton";


const Footer = ({ loginPage }) => {
  const { t } = useTranslation();

  return (
    <div>
      <footer className={loginPage ? "footer_login" : "footer_other"}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-4'>
              <ul className='p-0'>
                <li>
                  <Link to="/">{t("footer.links.col1.1")}</Link>
                </li>

                <li>
                  <Link to="/">{t("footer.links.col1.2")}</Link>
                </li>

                <li>
                  <Link to="/about">{t("footer.links.col1.3")}</Link>
                </li>

                <li>
                  <Link to="/">{t("footer.links.col1.4")}</Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-4'>
              <ul className='p-0'>
                <li>
                  <Link to="/career">{t("footer.links.col2.1")}</Link>
                </li>

                <li>
                  <Link to="/">{t("footer.links.col2.2")}</Link>
                </li>

                <li>
                  <Link to="/">{t("footer.links.col2.3")}</Link>
                </li>

                <li>
                  <Link to="/">{t("footer.links.col2.4")}</Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-4'>
              <ul className='p-0'>
                <li>
                  <Link to="/">{t("footer.links.col3.1")}</Link>
                </li>

                <li>
                  <Link to="/">{t("footer.links.col3.2")}</Link>
                </li>

                <li>
                  <Link to="/">{t("footer.links.col3.3")}</Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <div className='set_language'>
                <ChangeLanguageButton />
              </div>
            </div>
          </div>

          <div className='bottom-footer mt-5'>
            <div className='row'>
              <div className='col-lg-9 col-md-8 col-5 text-left'>
                <a className='' href='#!'>
                  <img src={loginPage ? Logo : LogoBlack} alt='logo' /> 

                  
                </a>
              </div>

              <div className='col-lg-3 col-md-4 col-7 text-left'>
                <p className='mt-lg-4 mt-md-3'>&copy; 2021 SheKunj.Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;

import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/whitelogo.svg";
import LogoBlack from "../../assets/images/whitelogo.svg";
import ChangeLanguageButton from "../LanguageButton";
import { routingConstants } from "../../utils/constants";

const Footer = ({ loginPage }) => {
  const { t } = useTranslation();

  return (
    <div className="noselect">
      <footer className={loginPage ? "footer_login" : "footer_other"}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-4'>
              <ul className='p-0'>
                <li>
                  <Link to={routingConstants.ABOUT}>
                    {t("footer.links.col1.3")}
                  </Link>
                </li>
                <li>
                  <Link to={routingConstants.SUCCESS_STORIES}>
                    {t("header.heading.8")}
                  </Link>
                </li>
                <li>
                  <a
                    href={routingConstants.BLOGS}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {t("header.heading.7")}
                  </a>
                </li>
                <li>
                  <Link to={routingConstants.CONTACT_US}>
                    {t("footer.links.col1.4")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-4'>
              <ul className='p-0'>
                <li>
                  <Link to={routingConstants.PRIVACY_POLICY}>
                    {t("footer.links.col3.1")}
                  </Link>
                </li>

                <li>
                  {/* <Link to={routingConstants.HELP_AND_SUPPORT}>{t("footer.links.col2.3")}</Link> */}
                  <Link to={routingConstants.CONTACT_US}>{t("footer.links.col2.3")}</Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-4'>
              <div className='set_language'>
                <ChangeLanguageButton />
              </div>
            </div>
          </div>

          <div className='bottom-footer mt-5'>
            <div className='row'>
              <div className='col-lg-9 col-md-8 col-6 text-left'>
                <Link className='' to='/'>
                  <img src={loginPage ? Logo : LogoBlack} alt='logo' />
                </Link>
              </div>

              <div className='col-lg-3 col-md-4 col-6 text-left'>
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

import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/whitelogo.svg";

// function Footer() {

    const Footer = ({loginPage}) => {

  const { t } = useTranslation();

  return (
    <div>
      <footer className={loginPage ? 'footer_login' : 'footer_other'}>
        <div class='container'>
          <div class='row'>
            <div class='col-md-3 col-4'>
              <ul>
                <li>
                  <Link>{t("footer.links.col1.1")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col1.2")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col1.3")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col1.4")}</Link>
                </li>
              </ul>
            </div>

            <div class='col-md-3 col-4'>
              <ul>
                <li>
                  <Link>{t("footer.links.col2.1")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col2.2")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col2.3")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col2.4")}</Link>
                </li>
              </ul>
            </div>

            <div class='col-md-3 col-4'>
              <ul>
                <li>
                  <Link>{t("footer.links.col3.1")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col3.2")}</Link>
                </li>

                <li>
                  <Link>{t("footer.links.col3.3")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div class='bottom-footer mt-5'>
            <div class='row'>
              <div class='col-lg-9 col-md-8 col-5 text-left'>
                <a class='' href='#'>
                  <img src={Logo} alt='logo' />
                </a>
              </div>

              <div class='col-lg-3 col-md-4 col-7 text-left'>
                <p class='mt-lg-4 mt-md-3'>&copy; 2021 SheKunj.Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

    // <div className='footer'>
    //     <div className='container'>
    //         <div className='row'>
    //             <div className='col-sm-2 col-md-2'>
    //                 <Link><p>{t('footer.links.col1.1')}</p></Link>
    //                 <Link><p>{t('footer.links.col1.2')}</p></Link>
    //                 <Link><p>{t('footer.links.col1.3')}</p></Link>
    //                 <Link><p>{t('footer.links.col1.4')}</p></Link>
    //             </div>

    //             <div className='col-sm-2 col-md-2'>
    //                 <Link><p>{t('footer.links.col2.1')}</p></Link>
    //                 <Link><p>{t('footer.links.col2.2')}</p></Link>
    //                 <Link><p>{t('footer.links.col2.3')}</p></Link>
    //                 <Link><p>{t('footer.links.col2.4')}</p></Link>
    //             </div>

    //             <div className='col-sm-2 col-md-2'>
    //                 <Link><p>{t('footer.links.col3.1')}</p></Link>
    //                 <Link><p>{t('footer.links.col3.2')}</p></Link>
    //                 <Link><p>{t('footer.links.col3.3')}</p></Link>
    //             </div>

    //         </div>
    //     </div>
    // </div>
  );
}

export default Footer;

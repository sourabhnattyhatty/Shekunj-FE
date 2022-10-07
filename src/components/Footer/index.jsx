import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/whitelogo.svg";
import LogoBlack from "../../assets/images/whitelogo.svg";
import ChangeLanguageButton from "../LanguageButton";
import { routingConstants } from "../../utils/constants";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Footer = ({ loginPage }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [adsFooter1, setAdsFooter1] = useState([]);
  const [adsFooter2, setAdsFooter2] = useState([]);
  const [adds,setAdds] = useState([]);

	useEffect(() => {
		axios.get('/private_adds/private_add?image_type=footer_1')
			.then((response) => {
				setAdsFooter1(response.data.results);
			});
	}, [])
  useEffect(() => {
		axios.get('/private_adds/private_add?image_type=footer_2')
			.then((response) => {
				setAdsFooter2(response.data.results);
			});
	}, [])

    // useEffect(() => {
    //   axios.post('/private_adds/click_add/',{
    //     add_email:`${adds[0]?.add_email}`
    //   })
    //     .then((response) => {
    //       setAdds(response.data.results);
    //     });
    // }, [])
  
  
  return (
    <div className="noselect">

      {/* google add */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 ads_footer_cover'>
            <a href={adsFooter1[0]?.url_adds}  target='_blank'>
            <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' />
            </a>
            {/* <a href={adds[0]?.add_email}  target='_blank'>
            <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' />
            </a> */}
       
            </div>
          </div>
        </div>
      </section>

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

            <div className='col-md-9 col-sm-12'>
              <div className='row'>
                <div className='col-md-3 col-3'>
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
                    <li>
                    <div className='set_language'>
                    <ChangeLanguageButton />
                  </div>
                    </li>
                  </ul>
                </div>

                <div className='col-md-9 col-sm-12'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className="footer_ads_bottom_parent">
                    <a href={adsFooter2[0]?.url_adds}  target='_blank'>
                    <img src={adsFooter2[0]?.image} alt='Image' className='footer_ads_bottom' />
                    </a>
                    <a href={adds[0]?.add_email}  target='_blank'>
            <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' />
            </a>
            {/* <a href={adds[0]?.add_email}  target='_blank'>
            <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' />
            </a> */}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bottom-footer mt-3'>
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

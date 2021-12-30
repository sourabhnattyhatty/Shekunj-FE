import { Container } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer } from "../../components";
import "./index.scss";
import "../CoursesModule/index.scss";
import swati_jain from "../../assets/images/Courses/swati_jain.png";
import check from "../../assets/images/Courses/check.png";
import Certificate from "../../assets/images/Courses/Certificate.png";
import Dawnload from "../../assets/images/Courses/Dawnload.png";
import Share from "../../assets/images/Courses/Share.png";
import fullscreen_icon from "../../assets/images/Courses/fullscreen_icon.png";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";

function CourseTest() {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='cou_resultBg'>
        <Container>
          <Row>
            <Col md={5} xs={12}>
              <div className='user_certifi'>
                <div className='user_pro'>
                  <img src={swati_jain} alt='' />
                  <h3>{t("allCertificatePage.name.1")}</h3>
                </div>

                <div className='skills'>
                  <h4>{t("allCertificatePage.heading.3")}</h4>
                  <div className='skill_flex'>
                    <ul>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.1")}
                      </li>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.2")}
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.3")}
                      </li>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.4")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className='offset-lg-1'>
              <p className='cou_tit'>{t("allCertificatePage.other.10")}</p>
              <div className='certi_img'>
                <p>
                  <div
                    class='content'
                    onClick={() => history.push(routingConstants.CERTIFICATE_FULL_VIEW)}
                  >
                    <a href='#!' target='_blank'>
                      <div class='content-overlay'></div>
                      <img src={Certificate} alt='' />
                      <div class='content-details fadeIn-bottom'>
                        <h3 class='content-title'>
                          <img src={fullscreen_icon} alt='' />
                        </h3>
                        <p class='content-text'>{t("allCertificatePage.other.11")}</p>
                      </div>
                    </a>
                  </div>
                </p>
                <p>
                  <img src={Dawnload} alt='' />
                  <br />
                  <img src={Share} alt='' />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;

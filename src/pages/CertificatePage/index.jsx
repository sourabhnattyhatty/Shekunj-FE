import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Star from "../../assets/images/rate.png";
import Marks from "../../assets/images/marks.png";
import Question from "../../assets/images/question.png";
import Time from "../../assets/images/time.png";
import "./index.scss";
import { useTranslation } from "react-i18next";

const CertificatePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='certificate_content text-center'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='star_content mt-md-5 mb-5'>
                <img src={Star} className='star_rate_1' alt='...' />
                <img src={Star} className='star_rate_2' alt='...' />
                <img src={Star} className='star_rate_3' alt='...' />
                <img src={Star} className='star_rate_4' alt='...' />
                <img src={Star} className='star_rate_5' alt='...' />
              </div>
            </Col>

            <Col md={12} className='text-center'>
              <h1>{t("allCertificatePage.other.3")}</h1>
              <p>78%</p>

              <div className='border_certificate mt-1 mb-4'></div>
            </Col>
          </Row>

          <div className='clock_section text-center mt-5 mb-5'>
            <div className='clock_section_first pt-5'>
              <img src={Marks} alt='...' />
              <div className='clock_section_first_content'>
                <p>{t("allCertificatePage.other.4")}</p>
                <span>100</span>
              </div>
            </div>

            <div className='clock_section_second'>
              <img src={Question} alt='...' />
              <div className='clock_section_first_content'>
                <p>
                {t("allCertificatePage.other.5")} <br /> {t("allCertificatePage.other.6")}
                </p>
                <span>30</span>
              </div>
            </div>

            <div className='clock_section_third pt-5'>
              <img src={Time} alt='...' />
              <div className='clock_section_first_content'>
                <p>{t("allCertificatePage.other.7")}</p>
                <span>45 Mins</span>
              </div>
            </div>

            <div className='d-block text-center certificate_para mb-md-5'>
              <button className='download_btn'>
                {t("allCertificatePage.button.4")}
              </button>

              <p className='mt-md-3'> {t("allCertificatePage.other.8")} </p>
              <span> {t("allCertificatePage.other.9")} </span>
            </div>
          </div>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
};

export default CertificatePage;

import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Certificate_FullView from "../../assets/images/Courses/Certificate_FullView.png";
import { routingConstants } from "../../utils/constants";
import "./index.scss";

const CertificatePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='_full_certif text-center'>
        <Container>
          <img src={Certificate_FullView} alt='' />
          <Link to={routingConstants.COURSES}>
            <button className='back_course'>{t("allCertificatePage.button.3")}</button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default CertificatePage;

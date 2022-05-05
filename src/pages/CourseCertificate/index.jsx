import { Avatar, Container } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer } from "../../components";
import "./index.scss";
import "../CoursesModule/index.scss";
import check from "../../assets/images/Courses/check.png";
import Dawnload from "../../assets/images/Courses/Dawnload.png";
import fullscreen_icon from "../../assets/images/Courses/fullscreen_icon.png";
import "./index.scss";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCourseCertificateDetail } from "../../store/certificate";

import CertificatesDetail from "../Certificates/CertificatesDetail";
import add from "../../assets/images/add.png";

function CourseTest() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const certificateRef = useRef();

  const { certificateDetail: certificate } = useSelector(
    (state) => state.certificateReducer,
  );
  const { lan } = useSelector((state) => state.languageReducer);

  const { user } = useSelector((state) => state.authReducer);
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      dispatch(getUserCourseCertificateDetail(id, history));
    } else {
      history.push(routingConstants.ALL_CERTIFICATE_PAGE);
    }
  }, [id, history, dispatch, lan]);

  const redirectToDownload = () => {
    history.push(`/certificate-detail/${id}/true`);
  }

  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='cou_resultBg noselect'>
        <Container>
          <Row>
            <Col md={5} xs={12}>
              <div className='user_certifi'>
                <div className='user_pro'>
                  <Avatar
                    src={user?.profile_pic}
                    sx={{ width: 150, height: 150 }}
                  />
                  <h3>{certificate?.name}</h3>
                </div>

                <div className='skills'>
                  <h4>{t("allCertificatePage.heading.3")}</h4>
                  <div className='skill_flex'>
                    <ul>
                      {certificate?.skill &&
                        certificate?.skill?.map(
                          (o, i) =>
                            i < 2 && (
                              <li>
                                <img src={check} alt='' /> {o.name}
                              </li>
                            ),
                        )}
                    </ul>
                    <ul>
                      {certificate?.skill &&
                        certificate?.skill?.map(
                          (o, i) =>
                            i >= 2 && (
                              <li>
                                <img src={check} alt='' /> {o.name}
                              </li>
                            ),
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={7} xs={12} className=''>
              <p className='cou_tit'>{t("allCertificatePage.other.10")}</p>
              <div className='certi_img'>
                <p>
                  <div
                    className='content'
                    onClick={() =>
                      history.push(
                        routingConstants.ALL_CERTIFICATE_DETAIL +
                        certificate?.id,
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <div className='content-overlay'></div>

                    <CertificatesDetail
                      ref={certificateRef}
                      showButton={false}
                      size='small'
                    />
                    <div className='content-details fadeIn-bottom'>
                      <h3 className='content-title'>
                        <img src={fullscreen_icon} alt='' />
                      </h3>
                      <p className='content-text'>
                        {t("allCertificatePage.other.11")}
                      </p>
                    </div>
                  </div>
                </p>
                <p className='certificate-downloaddiv'>
                  <img
                    src={Dawnload}
                    alt=''
                    style={{ cursor: "pointer" }}
                    //onClick={() => certificateRef.current.generatePDF()}
                    onClick={() => redirectToDownload()}
                  />
                  <br />
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

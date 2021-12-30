import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Footer, Header, SEO } from "../../components";
import { timeDifferenceFromDates } from "../../utils/utils";
import { getUserCourseCertificate } from "../../store/certificate";

import Certificate01 from "../../assets/images/AllCertificate/Certificate01.png";
import clock1 from "../../assets/icons/clock1.png";
import barChart from "../../assets/icons/bar-chart.png";
import lecturesIcon from "../../assets/icons/list.png";
import { getGuidanceCategory } from "../../store/guidance";
import Aos from "aos";
import "./index.scss";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";

function AllCertificatePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { certificates } = useSelector((state) => state.certificateReducer);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getUserCourseCertificate());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGuidanceCategory(null));
    dispatch(getGuidanceCategory());
    Aos.init({ duration: 2000 });
  }, [dispatch]);

  return (
    <div>
      <SEO title='Sheकुंज - All Certificates' />
      <Header loginPage={true} subPage='allCertificatePage' />

      <div className='all_certif_banner'>
        <Container>
          <Row>
            <Col md={5} xs={12} data-aos="slide-up">
              <h2>{t("allCertificatePage.heading.1")}</h2>
              <p>
              {t("allCertificatePage.content.1")}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='all_certif_sec'>
        <Container>
          <h2 className='my_achiev'>{t("allCertificatePage.heading.2")}</h2>
          {certificates.length > 0 ? (
            certificates.map((c) => (
              <>
                <div className='all_certif_box' key={c?.id}>
                  <Row>
                    <Col md={5} xs={12}>
                      <img className='certif_img' src={Certificate01} alt='' />
                    </Col>
                    <Col md={7} xs={12}>
                      <div className='all_certif_con'>
                        <h2>{c?.course_name || "N/A"}</h2>
                        <p>{c?.description || "N/A"} </p>
                        <div className='all_list'>
                          <ul>
                            <li>
                              <img src={clock1} alt='' />
                            </li>
                            <li>
                              {" "}
                              {
                                timeDifferenceFromDates(
                                  c?.course_start_time,
                                  c?.course_end_time,
                                ).hour
                              }{" "}
                              {
                                timeDifferenceFromDates(
                                  c?.course_start_time,
                                  c?.course_end_time,
                                ).minute
                              }
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img src={lecturesIcon} alt='' />
                            </li>
                            <li>{c?.no_of_lecture || 0} {t("allCertificatePage.other.1")}</li>
                          </ul>
                          <ul>
                            <li>
                              <img src={barChart} alt='' />
                            </li>
                            <li>{t("allCertificatePage.other.2")}</li>
                          </ul>
                        </div>
                        <button
                          onClick={() =>
                            history.push(routingConstants.ALL_CERTIFICATE_DETAIL + c?.id)
                          }
                        >
                          {t("allCertificatePage.button.1")}
                        </button>
                        <button>{t("allCertificatePage.button.2")}</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            ))
          ) : (
            <div className='text-center'>{t("common.noDataFound")}</div>
          )}
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
}

export default AllCertificatePage;

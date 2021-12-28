import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Footer, Header, ScrollToTop, SEO } from "../../components";
import { timeDifferenceFromDates } from "../../utils/utils";
import { getUserCourseCertificate } from "../../store/certificate";

import Certificate01 from "../../assets/images/AllCertificate/Certificate01.png";
import clock1 from "../../assets/icons/clock1.png";
import barChart from "../../assets/icons/bar-chart.png";
import lecturesIcon from "../../assets/icons/list.png";
import { getGuidanceCategory } from "../../store/guidance";
import Aos from "aos";
import "./index.scss";

function AllCertificatePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { certificates } = useSelector((state) => state.certificateReducer);

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
              <h2>achieve your goals</h2>
              <p>
                All over Indian Girl students are taking their web design
                careers to the next-level with Shekunj Academy. Here are some of
                their stories.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='all_certif_sec'>
        <Container>
          <h2 className='my_achiev'>my achievements</h2>
          {certificates.length > 0 ? (
            certificates.map((c) => (
              <>
                <div className='all_certif_box' key={c?.id}>
                  <Row>
                    <Col md={5} xs={12}>
                      <img className='certif_img' src={Certificate01} alt='' />
                      
                      

                      {/* <div className="result_box">
                        <Row>
                          <Col md={3} xs={12}>
                            <img src={certificate} alt="" />
                          </Col>



                          <Col md={9} xs={12}>
                            <div className="result_con">
                              <h3>Certificate of Completion</h3>
                              <h6>THIS CERTIFICATE PROUDLY PRESENTED TO</h6>


                              <h5>Swati Jain</h5>

                              <p>with membership number 1234 has been successfully completed the course</p>
                              <h5>“Mobile User Experience (UX) Design”</h5>

                              <p>conducted from Jan 1st 2021 to Apr 2nd 2021</p>
                              <p>Distinction: Best In class</p>
                            </div>
                          </Col>
                        </Row>
                      </div> */}
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
                            <li>{c?.no_of_lecture || 0} lectures</li>
                          </ul>
                          <ul>
                            <li>
                              <img src={barChart} alt='' />
                            </li>
                            <li>All level</li>
                          </ul>
                        </div>
                        <button
                          onClick={() =>
                            history.push(`/certificate-detail/${c?.id}`)
                          }
                        >
                          View Certificate
                        </button>
                        <button>Download</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            ))
          ) : (
            <div className='text-center'>No data found!</div>
          )}
        </Container>
      </div>
      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
}

export default AllCertificatePage;

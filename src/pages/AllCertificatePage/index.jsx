import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { Footer, Header, ScrollToTop, SEO } from "../../components";
import { formatTime } from "../../utils/utils";
import { getUserCourseCertificate } from "../../store/certificate";

import Certificate01 from "../../assets/images/AllCertificate/Certificate01.png";
import clock1 from "../../assets/icons/clock1.png";

import "./index.scss";

function AllCertificatePage() {
  const dispatch = useDispatch();
  const { certificates } = useSelector((state) => state.certificateReducer);

  useEffect(() => {
    dispatch(getUserCourseCertificate());
  }, [dispatch]);

  console.log({ certificates });

  return (
    <div>
      <SEO title='Sheकुंज - All Certificates' />
      <Header loginPage={true} subPage='allCertificatePage' />

      <div className='all_certif_banner'>
        <Container>
          <Row>
            <Col md={5} xs={12}>
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
                              {formatTime(c?.date_time).hour}{" "}
                              {formatTime(c?.date_time).minute}
                            </li>
                          </ul>
                          {/* <ul>
                            <li>
                              <img src={list} alt='' />
                            </li>
                            <li>46 lectures</li>
                          </ul>
                          <ul>
                            <li>
                              <img src={barChart} alt='' />
                            </li>
                            <li>All level</li>
                          </ul> */}
                        </div>
                        <button>View Certificate</button>
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

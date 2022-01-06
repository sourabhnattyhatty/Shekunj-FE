import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allCourses } from "../../store/courses/action";
// import { constants } from "../../utils";
import Calendar from "../../assets/icons/calendar.png";
import Clock from "../../assets/icons/clock.png";
import Calendarblack from "../../assets/icons/calendar-black.png";
import Clockblack from "../../assets/icons/clock-black.png";
import Certificate from "../../assets/images/certificate1.png";

// import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Header, Footer, SEO } from "../../components";

import "./Dashboard.scss";

const Dashboard = () => {
  const { t } = useTranslation();
  // const { courses } = useSelector((state) => state.coursesReducer);
  const { user } = useSelector((state) => state.authReducer);
  const {lan} = useSelector(state => state.careerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCourses());
  }, [dispatch,lan]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <SEO title='Sheकुंज - Courses' />
      <Header loginPage={true} />

      <div className='dashboard_main pt-5 pb-5'>
        <Container>
          <Row>
            <Col md={12}>
              <h1>{t("dashboardPage.greeting", { name: user?.name })}</h1>
              <p className='dashboard_back'>{t("dashboardPage.wish")}</p>
            </Col>
          </Row>

          <Row>
            <Col md={7} xs={12}>
              <div className='current_course'>
                <h3>{t("dashboardPage.current")}</h3>

                <div className='course_explore'>
                  <Row>
                    <Col md={3} xs={3}>
                      <h6>{t("allCertificatePage.skills.1")}</h6>
                    </Col>

                    <Col md={2} xs={3}>
                      <div>
                        <Box
                          sx={{ position: "relative", display: "inline-flex" }}
                        >
                          <CircularProgress variant='determinate' value={80} />
                          <Box
                            sx={{
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              position: "absolute",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              variant='caption'
                              component='div'
                              color='text.secondary'
                            >
                              80%
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                    </Col>

                    <Col md={4} xs={3}>
                      <ul className='p-0'>
                        <li>
                          <img src={Calendar} alt='...' className='pr-2' /> {t("common.month.5")}
                          20, 2021
                        </li>

                        <li>
                          <img src={Clock} alt='...' className='pr-2' /> 6h 30
                          {t("common.time.2")}
                        </li>
                      </ul>
                    </Col>
                    <Col md={3} xs={3} className='p-0'>
                      <div className='button_paddingarea'>
                        <button className='explore_button btn'>
                          {t("dashboardPage.explore")}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className='current_course'>
                <h3>{t("dashboardPage.inProgress")}</h3>
                <div className='course_inprogress mb-3'>
                  <Row>
                    <Col md={7} xs={3}>
                      <h6>{t("allCertificatePage.skills.1")}</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla tellus quam sollicitudin augue nunc.
                      </p>
                      <ul className='p-0 list-style-none list-inline'>
                        <li className='list-inline-item mr-4'>
                          <img src={Calendarblack} alt='...' className='pr-2' />{" "}
                          {t("common.month.5")} 20, 2021
                        </li>

                        <li className='list-inline-item'>
                          <img src={Clockblack} alt='...' className='pr-2' /> 6h
                          30 {t("common.time.2")}
                        </li>
                      </ul>
                    </Col>
                    <Col md={2} xs={3} className='p-0'>
                      <div className='progress-coursebardiv'>
                        <Box
                          sx={{ position: "relative", display: "inline-flex" }}
                        >
                          <CircularProgress variant='determinate' value={80} />
                          <Box
                            sx={{
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              position: "absolute",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              variant='caption'
                              component='div'
                              color='text.secondary'
                            >
                              100%
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                    </Col>
                    <Col md={3} xs={3}>
                      <div className='button_paddingarea'>
                        <button className='btn certificate_button'>
                          {t("dashboardPage.certificate")}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* ------------------ */}
                <div className='course_inprogress'>
                  <Row>
                    <Col md={7} xs={3}>
                      <h6>{t("allCertificatePage.skills.3")}</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla tellus quam sollicitudin augue nunc.
                      </p>
                      <ul className='p-0 list-style-none list-inline'>
                        <li className='list-inline-item mr-4'>
                          <img src={Calendarblack} alt='...' className='pr-2' />{" "}
                          {t("common.month.5")} 20, 2021
                        </li>

                        <li className='list-inline-item'>
                          <img src={Clockblack} alt='...' className='pr-2' /> 6h
                          30 {t("common.time.2")}
                        </li>
                      </ul>
                    </Col>
                    <Col md={2} xs={3} className='p-0'>
                      <div className='progress-coursebardiv'>
                        <Box
                          sx={{ position: "relative", display: "inline-flex" }}
                        >
                          <CircularProgress variant='determinate' value={80} />
                          <Box
                            sx={{
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              position: "absolute",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              variant='caption'
                              component='div'
                              color='text.secondary'
                            >
                              80%
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                    </Col>
                    <Col md={3} xs={3}>
                      <div className='button_paddingarea'>
                        <button className='btn certificate_button'>
                          {t("dashboardPage.certificate")}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            {/* right side content */}
            <Col md={5} xs={12}>
              <div className='course_completedright'></div>
              <div className='certificate-section'>
                <Row>
                  <Col md={7}>
                    <h6>{t("dashboardPage.certificate")}</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut commodo .
                    </p>
                  </Col>
                  <Col md={5} className='p-0'>
                    <img src={Certificate} alt='...' className='' />
                  </Col>
                </Row>
                <div>
                  <button className='btn all_certificatebutton'>
                  {t("dashboardPage.button.1")}
                  </button>
                </div>
              </div>
              <div className='your-testdiv'>
                <h6>{t("dashboardPage.heading.1")}</h6>
                <div className='your-testcontent'>
                  <Row>
                    <Col md={6}>
                      <div className='first-test'>
                        <h3>{t("allCertificatePage.skills.1")}</h3>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className='first-test'></div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
};

export default Dashboard;

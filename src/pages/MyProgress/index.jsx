import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Calendar from "../../assets/icons/calendar.png";
import Clock from "../../assets/icons/clock.png";
import Calendarblack from "../../assets/icons/calendar-black.png";
import Clockblack from "../../assets/icons/clock-black.png";
import arrowright from "../../assets/images/MyProfile/arrowright.png";

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./index.scss";
import { Header, Footer, ScrollToTop, SEO } from "../../components";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <SEO title='Sheकुंज - Courses' />
      <Header loginPage={true} subPage="myProgress" />

      <div className='dashboard_main pt-5 pb-5'>
        <Container>
          <Row>
            <Col md={12}>
              <h1>Hello Swati!</h1>
              <p class='dashboard_back'>Good to see you back!</p>
            </Col>
          </Row>

          <Row>
            <Col md={7} xs={12}>
              <div className='current_course'>
                <h3>Current Course</h3>
                <div className='course_explore'>
                  <Row>
                    <Col md={3} xs={6}>
                      <h6>Adobe Photoshop</h6>
                    </Col>

                    <Col md={2} xs={6}>
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

                    <Col md={4} xs={6}>
                      <ul className='p-0'>
                        <li>
                          <img src={Calendar} alt='...' className='pr-2' /> May
                          20, 2021
                        </li>

                        <li>
                          <img src={Clock} alt='...' className='pr-2' /> 6h 30
                          min
                        </li>
                      </ul>
                    </Col>
                    <Col md={3} xs={6} className='p-0'>
                      <div className='button_paddingarea'>
                        <button className='explore_button btn'>Explore</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className='current_course'>
                <h3>Course in prograss</h3>
                <div className='course_inprogress'>
                  <Row>
                    <Col md={7} xs={9}>
                      <h6>Adobe Photoshop</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla tellus quam sollicitudin augue nunc.
                      </p>
                      <ul className='p-0 list-style-none list-inline'>
                        <li className='list-inline-item mr-4'>
                          <img src={Calendarblack} alt='...' className='pr-2' />{" "}
                          May 20, 2021
                        </li>

                        <li className='list-inline-item'>
                          <img src={Clockblack} alt='...' className='pr-2' /> 6h
                          30 min
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
                    <Col md={3} xs={12}>
                      <div className='button_paddingarea'>
                        <button className='btn certificate_button'>
                          Certificate
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* ------------------ */}
                <div className='course_inprogress'>
                  <Row>
                    <Col md={7} xs={9}>
                      <h6>Adobe Illustrator - Graphic Design Software</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla tellus quam sollicitudin augue nunc.
                      </p>
                      <ul className='p-0 list-style-none list-inline'>
                        <li className='list-inline-item mr-4'>
                          <img src={Calendarblack} alt='...' className='pr-2' />{" "}
                          May 20, 2021
                        </li>

                        <li className='list-inline-item'>
                          <img src={Clockblack} alt='...' className='pr-2' /> 6h
                          30 min
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
                    {/* <Col md={3} xs={3}>
                      <div className='button_paddingarea'>
                        <button className='btn certificate_button'></button>
                      </div>
                    </Col> */}
                  </Row>
                </div>

                {/* ------------------ */}
                <div className='course_inprogress'>
                  <Row>
                    <Col md={7} xs={9}>
                      <h6>Adobe Illustrator - Graphic Design Software</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla tellus quam sollicitudin augue nunc.
                      </p>
                      <ul className='p-0 list-style-none list-inline'>
                        <li className='list-inline-item mr-4'>
                          <img src={Calendarblack} alt='...' className='pr-2' />{" "}
                          May 20, 2021
                        </li>

                        <li className='list-inline-item'>
                          <img src={Clockblack} alt='...' className='pr-2' /> 6h
                          30 min
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
                    {/* <Col md={3} xs={3}>
                      <div className='button_paddingarea'>
                        <button className='btn certificate_button'></button>
                      </div>
                    </Col> */}
                  </Row>
                </div>

                {/* ------------------ */}
                <div className='course_inprogress'>
                  <Row>
                    <Col md={7} xs={9}>
                      <h6>Adobe Illustrator - Graphic Design Software</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla tellus quam sollicitudin augue nunc.
                      </p>
                      <ul className='p-0 list-style-none list-inline'>
                        <li className='list-inline-item mr-4'>
                          <img src={Calendarblack} alt='...' className='pr-2' />{" "}
                          May 20, 2021
                        </li>

                        <li className='list-inline-item'>
                          <img src={Clockblack} alt='...' className='pr-2' /> 6h
                          30 min
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
                    {/* <Col md={3} xs={3}>
                      <div className='button_paddingarea'>
                        <button className='btn certificate_button'></button>
                      </div>
                    </Col> */}
                  </Row>
                </div>

                {/* ------------------ */}
                <div className='course_inprogress'>
                  <Row>
                    <Col md={7} xs={9}>
                      <h6>Adobe Illustrator - Graphic Design Software</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla tellus quam sollicitudin augue nunc.
                      </p>
                      <ul className='p-0 list-style-none list-inline'>
                        <li className='list-inline-item mr-4'>
                          <img src={Calendarblack} alt='...' className='pr-2' />{" "}
                          May 20, 2021
                        </li>

                        <li className='list-inline-item'>
                          <img src={Clockblack} alt='...' className='pr-2' /> 6h
                          30 min
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
                    {/* <Col md={3} xs={3}>
                      <div className='button_paddingarea'>
                        <button className='btn certificate_button'></button>
                      </div>
                    </Col> */}
                  </Row>
                </div>
              </div>
            </Col>
            {/* right side content */}
            <Col md={5} xs={12}>
              <div className='course_completedright'>
                <Row>
                  <Col md={7} xs={6}></Col>

                  <Col md={5} xs={6}>
                    <div className="course_prog pink_col">
                      <h6>6</h6>
                      <h3>
                        Courses <br /> Inprogress
                      </h3>
                    </div>

                    <div className='course_prog yelloow_col'>
                      <h6>4</h6>
                      <h3>
                        Courses <br /> Completed
                      </h3>
                    </div>

                    <div className='course_prog purple_col'>
                      <h6>2</h6>
                      <h3>
                        Not <br /> Started
                      </h3>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className='certificate-section'>
                <Row>
                  <Col md={12}>
                    <h6>Certificate</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut commodo .
                    </p>
                  </Col>
                </Row>
                <div>
                  <Link to="/AllCertificatePage">
                    <button className='btn all_certificatebutton'>
                      All Certificates
                    </button>
                  </Link>
                </div>
              </div>
              <div className='your-testdiv'>
                <h6>Your test</h6>
                <div className='your-testcontent'>
                  <Row>
                    <Col md={6} xs={6}>
                      <div className='first-test'>
                        <h5>
                          Adobe <br /> Photoshop
                        </h5>
                        <p>
                          100% <br /> <img src={arrowright} alt='' />
                        </p>
                      </div>
                    </Col>
                    <Col md={6} xs={6}>
                      <div className='first-test'>
                        <h5>
                          Adobe <br /> Photoshop
                        </h5>
                        <p>
                          100% <br /> <img src={arrowright} alt='' />
                        </p>
                      </div>
                    </Col>

                    <Col md={6} xs={6}>
                      <div className='first-test'>
                        <h5>
                          Adobe <br /> Photoshop
                        </h5>
                        <p>
                          100% <br /> <img src={arrowright} alt='' />
                        </p>
                      </div>
                    </Col>

                    <Col md={6} xs={6}>
                      <div className='first-test'>
                        <h5>
                          Adobe <br /> Photoshop
                        </h5>
                        <p>
                          100% <br /> <img src={arrowright} alt='' />
                        </p>
                      </div>
                    </Col>

                    <Col md={6} xs={6}>
                      <div className='first-test'>
                        <h5>
                          Adobe <br /> Photoshop
                        </h5>
                        <p>
                          100% <br /> <img src={arrowright} alt='' />
                        </p>
                      </div>
                    </Col>

                    <Col md={6} xs={6}>
                      <div className='first-test'>
                        <h5>
                          Adobe <br /> Photoshop
                        </h5>
                        <p>
                          100% <br /> <img src={arrowright} alt='' />
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
}

export default index;

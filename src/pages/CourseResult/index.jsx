import { Container } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { Row, Col } from "react-bootstrap";
import { LinearProgress } from "@mui/material";
import { Header, Footer, ScrollToTop } from "../../components";
import "./index.scss";
import "../CoursesModule/index.scss";
import win from "../../assets/images/Courses/win.png";

function CourseTest() {
  return (
    <div>
      <Header loginPage={true} page='courses' />
      <Container>
        <div className='cou_resultBg'>
          <Row>
            <Col md={6} xs={12} className="offset-2">
              <div className='cou_result_cont'>
                <h2>Your Result</h2>
                <img src={win} alt='' />
                <h2>Congratulation Swati Jain!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  ornare ac commodo erat velit felis odio. In blandit fusce
                  nulla odio. Iaculis lacus eget facilisis eu massa.
                </p>
              </div>

              <Row>
                <Col md={4} xs={12}>
                  <div class='container p-5'>
                    <div class='progress' data-percentage='100'>
                      <span class='progress-left'>
                        <span class='progress-bar'></span>
                      </span>
                      <span class='progress-right'>
                        <span class='progress-bar'></span>
                      </span>
                      <div class='progress-value'>
                        <div>
                          100%
                          <br />
                          <span>Correct Answers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={4} xs={12}>
                  <div class='container p-5'>
                    <div class='progress' data-percentage='78'>
                      <span class='progress-left'>
                        <span class='progress-bar'></span>
                      </span>
                      <span class='progress-right'>
                        <span class='progress-bar'></span>
                      </span>
                      <div class='progress-value'>
                        <div>
                          78%
                          <br />
                          <span>Candidate’s Score</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={4} xs={12}>
                  <div class='container p-5'>
                    <div class='progress' data-percentage='45'>
                      <span class='progress-left'>
                        <span class='progress-bar'></span>
                      </span>
                      <span class='progress-right'>
                        <span class='progress-bar'></span>
                      </span>
                      <div class='progress-value'>
                        <div>
                          45%
                          <br />
                          <span>Total Time</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <button className="get_certif">Get Your Certificate</button>
            </Col>
          </Row>
        </div>
      </Container>
      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;

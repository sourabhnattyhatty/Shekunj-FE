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

      <div className='cou_resultBg'>
        <Container>
          <Row>
            <Col md={8} xs={12} className='offset-lg-2'>
              <div className='cou_result_cont'>
                <h2>Your Result</h2>
                <img src={win} alt='' />
                <h2>Congratulation <b>Swati Jain!</b></h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  ornare ac commodo erat velit felis odio. In blandit fusce
                  nulla odio. Iaculis lacus eget facilisis eu massa.
                </p>
              </div>

              <div className='pro_div'>
                <Row>
                  <Col md={3} xs={12}>
                    
                      <div class='progress' data-percentage='90'>
                        <span class='progress-left'>
                          <span class='progress-bar'></span>
                        </span>
                        <span class='progress-right'>
                          <span class='progress-bar'></span>
                        </span>
                        <div class='progress-value'>
                          <div>
                            <p>90</p>
                            <br />
                            <span>
                              Correct <br /> Answers
                            </span>
                          </div>
                        </div>
                      </div>
                    
                  </Col>

                  <Col md={6} xs={12}>
                    
                      <div class='progress pink_pro' data-percentage='78'>
                        <span class='progress-left'>
                          <span class='progress-bar col_chg'></span>
                        </span>
                        <span class='progress-right'>
                          <span class='progress-bar col_chg'></span>
                        </span>
                        <div class='progress-value'>
                          <div>
                            <p>78</p>
                            <br />
                            <span>
                              Candidate’s <br /> Score
                            </span>
                          </div>
                        </div>
                      </div>
                  
                  </Col>

                  <Col md={3} xs={12}>
                    
                      <div class='progress' data-percentage='45'>
                        <span class='progress-left'>
                          <span class='progress-bar'></span>
                        </span>
                        <span class='progress-right'>
                          <span class='progress-bar'></span>
                        </span>
                        <div class='progress-value'>
                          <div>
                            <p>45 <span>min</span></p> 
                            <br />
                            <span>Total Time</span>
                          </div>
                        </div>
                      </div>
                   
                  </Col>
                </Row>
              </div>
              <button className='get_certif'>Get Your Certificate</button>
            </Col>
          </Row>
        </Container>
      </div>

      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;

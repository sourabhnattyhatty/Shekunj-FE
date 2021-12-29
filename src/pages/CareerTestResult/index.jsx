import { Container } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer, ScrollToTop } from "../../components";
import Confetti from "react-confetti";

import "./index.scss";
import "../CoursesModule/index.scss";
import win from "../../assets/images/Courses/win.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { careerTestResult } from "../../store/guidance/action";

function CourseTest() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { guidanceResult: result } = useSelector(
    (state) => state.guidanceReducer,
  );

  React.useEffect(() => {
    dispatch(careerTestResult(id));
  }, [dispatch, id]);

  return (
    <div>
      <Header loginPage={true} page='guidance' />

      <div className='cou_resultBg'>
        <Container>
          {result?.is_result && (
            <Confetti
              style={{ marginTop: "154px" }}
              height={850}
              width={1500}
            />
          )}
          <Row>
            <Col md={8} xs={12} className='offset-lg-2'>
              <div className='cou_result_cont'>
                <h2>Your Result</h2>
                <img src={win} alt='' />
                <h2>
                  {result?.is_result ? (
                    <>
                      Congratulation <b>{result?.name}!</b>
                    </>
                  ) : (
                    <>
                      Bad Performance <b>{result?.name}!</b>
                    </>
                  )}
                </h2>
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
                          <p>{result?.no_of_correct_answer || 0}</p>
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
                          <p>{Math.round(result?.result) || 0}%</p>
                          <br />
                          <span>
                            Candidate's <br /> Score
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
                          <p>
                            {result?.test_time
                              ? (result?.test_time).toFixed(2)
                              : 0}{" "}
                            <span>min</span>
                          </p>
                          <br />
                          <span>Total Time</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <Link
                  to='/SuccessCareerTest'
                >
                  <button className='get_certif'>
                    Go to Career Test
                  </button>
                </Link>
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

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
import { testResult } from "../../store/courses/action";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import CircleProgressBar from "./CircleProgressBar";

function CourseTest() {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  const { result } = useSelector((state) => state.coursesReducer);
  const {lan} = useSelector(state => state.careerReducer);
  

  React.useEffect(() => {
    if (id) {
      dispatch(testResult(id));
    }
  }, [dispatch, id, result?.result, lan]);

  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='cou_resultBg'>
        <Container>
          {result?.is_pass && (
            <Confetti
              style={{ marginTop: "154px" }}
              height={850}
              width={1500}
            />
          )}
          <Row>
            <Col md={8} xs={12} className='offset-lg-2'>
              <div className='cou_result_cont'>
                <h2>{t("coursesPage.coursesResultPage.heading.1")}</h2>
                <img src={win} alt='' />
                <h2>
                  {result?.is_pass ? (
                    <>
                      {t("coursesPage.coursesResultPage.other.1")}{" "}
                      <b>{result?.name}!</b>
                    </>
                  ) : (
                    <>
                      {t("coursesPage.coursesResultPage.other.2")}{" "}
                      <b>{result?.name}!</b>
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
                    <CircleProgressBar
                      size='small'
                      title1='Correct'
                      title2='Answers'
                      result={result?.no_of_correct_answer || 0}
                    />
                    {/* <div
                      className='progress'
                      data-percentage={Math.round(result?.result)}
                    >
                      <span className='progress-left'>
                        <span className='progress-bar'></span>
                      </span>
                      <span className='progress-right'>
                        <span className='progress-bar'></span>
                      </span>
                      <div className='progress-value'>
                        <div>
                          <p>{result?.no_of_correct_answer || 0}</p>
                          <br />
                          <span>
                            {t("coursesPage.coursesResultPage.other.3.1")}{" "}
                            <br />{" "}
                            {t("coursesPage.coursesResultPage.other.3.2")}
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </Col>

                  <Col md={6} xs={12}>
                    <CircleProgressBar
                      size='medium'
                      title1='Candidate’s'
                      title2='Score'
                      result={Math.round(result?.result) || 0}
                    />

                    {/* <div
                      className='progress pink_pro'
                      data-percentage={Math.round(result?.result)}
                    >
                      <span className='progress-left'>
                        <span className='progress-bar col_chg'></span>
                      </span>
                      <span className='progress-right'>
                        <span className='progress-bar col_chg'></span>
                      </span>
                      <div className='progress-value'>
                        <div>
                          <p>{Math.round(result?.result) || 0}%</p>
                          <br />
                          <span>
                            {t("coursesPage.coursesResultPage.other.4.1")}{" "}
                            <br />{" "}
                            {t("coursesPage.coursesResultPage.other.4.2")}
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </Col>

                  <Col md={3} xs={12}>
                    <CircleProgressBar
                      size='small1'
                      title1='Total Time'
                      result={
                        result?.test_time ? (result?.test_time).toFixed(2) : 0
                      }
                    />

                    {/* <div className='progress' data-percentage='45'>
                      <span className='progress-left'>
                        <span className='progress-bar'></span>
                      </span>
                      <span className='progress-right'>
                        <span className='progress-bar'></span>
                      </span>
                      <div className='progress-value'>
                        <div>
                          <p>
                            {result?.test_time
                              ? (result?.test_time).toFixed(2)
                              : 0}{" "}
                            <span>{t("common.time.2")}</span>
                          </p>
                          <br />
                          <span>
                            {t("coursesPage.coursesResultPage.other.5")}
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </Col>
                </Row>
              </div>
              <Link
                to={
                  result?.is_pass
                    ? routingConstants.COURSE_CERTIFICATE + result?.id
                    : routingConstants.COURSE_DETAILS + id
                }
              >
                <button className='get_certif'>
                  {result?.is_pass
                    ? t("coursesPage.coursesResultPage.button.1")
                    : t("coursesPage.coursesResultPage.button.2")}
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

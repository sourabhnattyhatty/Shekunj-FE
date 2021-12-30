import { Container } from "@mui/material";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer } from "../../components";
import Confetti from "react-confetti";

import "./index.scss";
import "../CoursesModule/index.scss";
import win from "../../assets/images/Courses/win.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { testResult } from "../../store/courses/action";
import { careerTestResult } from "../../store/guidance/action";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";

function CourseTest() {
  const [result, setResult] = useState({});
  const [passingMarks, setPassingMarks] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { result: courseResult } = useSelector((state) => state.coursesReducer);
  const { guidanceResult } = useSelector((state) => state.guidanceReducer);
  const { t } = useTranslation();

  React.useEffect(() => {
    if (window.location.pathname.includes("course-result")) {
      debugger;
      dispatch(careerTestResult(id));
    } else {
      if (!courseResult?.result) {
        dispatch(testResult(id));
      }
    }
  }, [dispatch, id, courseResult?.result]);

  React.useEffect(() => {
    if (courseResult) {
      setResult({ ...courseResult, page: "course" });
    }
    if (guidanceResult) {
      setResult({ ...guidanceResult, page: "guidance" });
    }
    setPassingMarks(result?.total_score * 0.7);
  }, [courseResult, guidanceResult, result?.total_score]);

  return (
    <div>
      <Header
        loginPage={true}
        page={result?.page === "course" ? "courses" : "guidance"}
      />

      <div className='cou_resultBg'>
        <Container>
          {Math.round(result?.result) >= passingMarks && (
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
                  {Math.round(result?.result) >= passingMarks ? (
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
                            {t("coursesPage.coursesResultPage.other.3.1")}{" "}
                            <br />{" "}
                            {t("coursesPage.coursesResultPage.other.3.2")}
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
                            {t("coursesPage.coursesResultPage.other.4.1")}{" "}
                            <br />{" "}
                            {t("coursesPage.coursesResultPage.other.4.2")}
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
                            <span>{t("common.time.2")}</span>
                          </p>
                          <br />
                          <span>{t("coursesPage.coursesResultPage.other.5")}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <Link
                to={
                  Math.round(result?.result) >= passingMarks
                    ? `${routingConstants.COURSE_CERTIFICATE}`
                    : `${routingConstants.COURSE_DETAILS + id}`
                }
              >
                <button className='get_certif'>
                  {Math.round(result?.result) >= passingMarks
                    ? t("coursesPage.coursesResultPage.button.1")
                    : t("coursesPage.coursesResultPage.button.2")}
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;

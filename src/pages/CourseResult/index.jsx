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
  const { lan } = useSelector((state) => state.languageReducer);

  React.useEffect(() => {
    if (id) {
      dispatch(testResult(id));
    }
  }, [dispatch, id, result?.result, lan]);

  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='cou_resultBg noselect'>
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
                You are an inspiration to others! Exams are always tough, but the Champions like you make it worth while by your excellent performance.
                </p>
              </div>

              <div className='pro_div'>
                <Row>
                  <Col md={3} xs={12}>
                    <CircleProgressBar
                      size='small'
                      title1='Result'
                      // title2='Answers'
                      result={result?.no_of_correct_answer || 0}
                    />
                  </Col>

                  <Col md={6} xs={12}>
                    <CircleProgressBar
                      size='medium'
                      title1='Candidate’s'
                      title2='Score'
                      result={Math.round(result?.result) || 0}
                    />
                  </Col>

                  <Col md={3} xs={12}>
                    <CircleProgressBar
                      size='small1'
                      title1='Total Time'
                      result={
                        result?.test_time ? (result?.test_time).toFixed(2) : 0
                      }
                    />
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

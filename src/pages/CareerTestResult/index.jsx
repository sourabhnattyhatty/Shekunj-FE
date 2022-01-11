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
import { useTranslation } from "react-i18next";
import { routingConstants } from "../../utils/constants";

function CourseTest() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { guidanceResult: result } = useSelector(
    (state) => state.guidanceReducer,
  );
  const {lan} = useSelector(state => state.languageReducer);
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(careerTestResult(id));
  }, [dispatch, id,lan]);

  return (
    <div>
      <Header loginPage={true} page='guidance' />

      <div className='cou_resultBg noselect'>
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
                <h2>{t("coursesPage.coursesResultPage.heading.1")}</h2>
                <img src={win} alt='' />
                <h2>
                  {result?.is_result ? (
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
                    <div className='progress' data-percentage='90'>
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
                    </div>
                  </Col>

                  <Col md={6} xs={12}>
                    <div className='progress pink_pro' data-percentage='78'>
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
                    </div>
                  </Col>

                  <Col md={3} xs={12}>
                    <div className='progress' data-percentage='45'>
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
                          <span>{t("coursesPage.coursesResultPage.other.5")}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <Link to={routingConstants.SUCCESS_CAREER_TEST}>
                <button className='get_certif'>{t("coursesPage.coursesResultPage.button.3")}</button>
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

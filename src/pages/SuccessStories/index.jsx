import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  setCollapseSuccessStory,
  successStories as fetchSuccessStories,
} from "../../store/courses/action";
import { Header, Footer } from "../../components";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import global from "../../assets/images/Success/global.png";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { sliceString } from "../../utils/utils";

function SuccessStory() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { successStories } = useSelector((state) => {
    return state.coursesReducer;
  });
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchSuccessStories());
  }, [dispatch]);

  const handleSetCollapse = (id, is_collapse) => {
    dispatch(setCollapseSuccessStory(id, is_collapse ? false : true));
  };

  return (
    <div>
      <Header loginPage={true} page='story' />
      <div className='SuccStory_banner'>
        <Container>
          <Row>
            <Col md={1}>
              <div className='global_img'>
                <img src={global} alt='' className='vert-move' />
              </div>
            </Col>
            <Col md={6}>
              <h2 data-aos='slide-up'>{t("successStoriesPage.heading.1")}</h2>
              <p>{t("successStoriesPage.content.1")}</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {successStories?.length > 0 &&
          successStories?.slice(0).reverse().map((s, idx) => (
            <>
              <div className='suc_box' key={s?.id}>
                <Row>
                  {idx % 2 === 0 ? (
                    <>
                      <Col md={8} xs={12}>
                        <h2>
                          <img
                            className='quote_img'
                            src={double_quote}
                            alt=''
                          />
                          {s?.name || t("common.n/a")}{" "}
                          {/* {s?.course_name || t("common.n/a")} */}
                        </h2>

                        <p>
                          {(s?.is_collapse
                            ? s?.description
                            : sliceString(s?.description)) || t("common.n/a")}
                        </p>

                        {/* {s?.is_collapse && (
                          <ul>
                            <li>
                              {t("successStoriesPage.other.1")} :{" "}
                              <b>{s?.company_name || t("common.n/a")}</b>
                            </li>
                            <li>
                              {t("successStoriesPage.other.2")} :
                              <b> {s?.certificate_name || t("common.n/a")}</b>
                            </li>
                            <li>
                              {t("successStoriesPage.other.3")} :{" "}
                              <b>
                                {" "}
                                {s?.duration || 0} {t("common.time.1")}
                              </b>
                            </li>
                          </ul>
                        )} */}
                        {s?.description?.length >= 300 && (
                          <div className='suc_btn'>
                            <hr />
                            <button
                              onClick={() =>
                                handleSetCollapse(s?.id, s?.is_collapse)
                              }
                            >
                              {t("successStoriesPage.button.1")}{" "}
                              {s?.is_collapse
                                ? t("common.less1")
                                : t("common.more1")}{" "}
                              <img src={s?.is_collapse ? up : down1} alt='' />
                            </button>
                            <hr />
                          </div>
                        )}
                      </Col>

                      <Col md={4} xs={12}>
                        <img src={s?.image} alt='' />
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col md={4} xs={12}>
                        <img src={s?.image} alt='' />
                      </Col>
                      <Col md={8} xs={12}>
                        <h2>
                          <img
                            className='quote_img'
                            src={double_quote}
                            alt=''
                          />
                          {s?.name || t("common.n/a")}{" "}
                          {/* {s?.course_name || t("common.n/a")} */}
                        </h2>
                        {/* <h3>{s?.title || t("common.n/a")} </h3> */}

                        <p>
                          {(s?.is_collapse
                            ? s?.description
                            : sliceString(s?.description)) || t("common.n/a")}
                        </p>

                        {/* {s?.is_collapse && (
                          <ul>
                            <li>
                              {t("successStoriesPage.other.1")} :{" "}
                              <b>{s?.company_name || t("common.n/a")}</b>
                            </li>
                            <li>
                              {t("successStoriesPage.other.2")} :
                              <b> {s?.certificate_name || t("common.n/a")}</b>
                            </li>
                            <li>
                              {t("successStoriesPage.other.3")} :{" "}
                              <b>
                                {" "}
                                {s?.duration || 0} {t("common.time.1")}
                              </b>
                            </li>
                          </ul>
                        )} */}
                        {s?.description?.length >= 300 && (
                          <div className='suc_btn'>
                            <hr />
                            <button
                              onClick={() =>
                                handleSetCollapse(s?.id, s?.is_collapse)
                              }
                            >
                              {t("successStoriesPage.button.1")}{" "}
                              {s?.is_collapse
                                ? t("common.less1")
                                : t("common.more1")}{" "}
                              <img src={s?.is_collapse ? up : down1} alt='' />
                            </button>
                            <hr />
                          </div>
                        )}
                      </Col>
                    </>
                  )}
                </Row>
              </div>
            </>
          ))}
        {successStories?.length === 0 && (
          <div className='text-center mt-5'>{t("common.noDataFound")}</div>
        )}
      </Container>

      <div className='want'>
        <Container>
          <h2>{t("successStoriesPage.content.2")}</h2>
          <button onClick={() => history.push("/courses")} className='want_btn'>
            {t("successStoriesPage.button.2")}
          </button>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default SuccessStory;

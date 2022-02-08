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
import { paragraph, sliceString } from "../../utils/utils";

function SuccessStory() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { successStories } = useSelector((state) => {
    return state.coursesReducer;
  });
  const { lan } = useSelector((state) => state.languageReducer);

  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchSuccessStories());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, lan]);

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
            <Col md={6} data-aos='slide-up'>
              <h2> {t("successStoriesPage.heading.1")}</h2>
              <p className="sucess_first_p">{t("successStoriesPage.content.1")}</p>
              <p>{t("successStoriesPage.content.4")}</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {successStories?.length > 0 &&
          successStories
            ?.slice(0)
            .reverse()
            .map((s, idx) => (
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
                          </h2>

                          <p className="noselect" style={{whiteSpace:"pre-line"}}>
                            {(s?.is_collapse
                              ? paragraph(s?.description.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n'))
                              : sliceString(s?.description.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n'))) || t("common.n/a")}
                          </p>

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
                          </h2>

                          <p className="noselect" style={{whiteSpace:"pre-line"}}>
                            {(s?.is_collapse
                              ? paragraph(s?.description)
                              : sliceString(s?.description)) || t("common.n/a")}
                          </p>

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

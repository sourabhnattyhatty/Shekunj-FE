import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { AccordionComponent, Footer, Header, SEO } from "../../components";
import {
  getTopCollages,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import { paragraph } from "../../utils/utils";
import TopCollage from "../../assets/images/Career/clg.jpg"

import "../HomePage/index.scss";
import "./index.scss";

const CareerPage = () => {
  const dispatch = useDispatch();
  const { topCollages, courseSector } = useSelector(
    (state) => state.careerReducer,
  );
  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(reSetFilterValue());
    dispatch(getTopCollages());
  }, [dispatch, lan]);

  // const transformPrice = (price) => {
  //   let nf = new Intl.NumberFormat("en-US");
  //   return nf.format(
  //     Number.isNaN(parseInt(price, 10)) ? 0 : parseInt(price, 10) || 0,
  //   );
  // };

  const transformImg = (image) => {
    return image ? image : TopCollage;
  };

  const STREAM = {
    name: t("careerTopColleges.listItems.1"),
    rows: topCollages?.collage_stream_list || [],
  };

  const handleCollapse = (id, checked) => {
    dispatch(toggleCollapseValue(id, checked ? false : true, "topCollages"));
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='colleges' />

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit noselect'>
            <h2>{t("careerTopColleges.heading.1")}</h2>
            <p>
              {t("careerTopColleges.other.2")}{" "}
              {topCollages?.collage_list?.length || 0}{" "}
              {t("careerTopColleges.other.3")}
            </p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='colleges'
                stream={STREAM}
                ownership={courseSector}
              />
            </Col>

            <Col md={8} xs={12}>
              {topCollages?.collage_list?.length > 0 ? (
                topCollages.collage_list.map(
                  (c) =>
                    c &&
                    c.name && (
                      <div
                        className='career_box noselect'
                        style={{ height: "auto" }}
                        key={c?.id}
                      >
                        <Row>
                          <Col md={7} xs={12}>
                            <div className='top_col_content'>
                              <h3>{c && c.name ? c.name : t("common.n/a")}</h3>
                              <p>
                                {c && c.city ? c.city : t("common.n/a")},{" "}
                                {c && c.state ? c?.state : t("common.n/a")} •{" "}
                                <span style={{ textTransform: "capitalize" }}>
                                  {c && c.collage_type
                                    ? c?.collage_type
                                    : t("common.n/a")}
                                </span>
                              </p>
                              <ul>
                                <li>
                                  <span>{t("careerTopColleges.other.4")}</span>{" "}
                                  : {/* {transformPrice(c?.fees)}{" "} */}
                                  {c && c.contact_no
                                    ? c?.contact_no
                                    : t("common.n/a")}
                                </li>
                                <li>
                                  <span>{t("careerTopColleges.other.5")}</span>{" "}
                                  :{" "}
                                  <a
                                    href={c?.website}
                                    target='_blank'
                                    rel='noreferrer'
                                  >
                                    {c && c.website
                                      ? c.website
                                      : t("common.n/a")}
                                  </a>
                                </li>
                                {c?.is_collapse && (
                                  <>
                                    <li>
                                      <span>
                                        {t("careerTopColleges.other.9")}
                                      </span>{" "}
                                      :{" "}
                                      {c && c.email
                                        ? c?.email
                                        : t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopColleges.other.10")}
                                      </span>{" "}
                                      :{" "}
                                      {c && c.established_year
                                        ? c?.established_year
                                        : t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopColleges.other.7")}
                                      </span>{" "}
                                      :{" "}
                                      {c && c.accreditation
                                        ? c?.accreditation
                                        : t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopColleges.other.6")}
                                      </span>{" "}
                                      :{" "}
                                      {c && c.about_college
                                        ? c?.about_college
                                        : t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopColleges.other.8")}
                                      </span>{" "}
                                      :{" "}
                                      {c && c.courses_offered
                                        ? paragraph(c.courses_offered).map(
                                            (o) => <p>{o}</p>,
                                          )
                                        : t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopColleges.other.11")}
                                      </span>{" "}
                                      :{" "}
                                      {c && c.gender_intech
                                        ? c?.gender_intech
                                        : t("common.n/a")}
                                    </li>
                                  </>
                                )}
                              </ul>
                              <button
                                className='btn_viewCour'
                                onClick={() =>
                                  handleCollapse(c?.id, c?.is_collapse)
                                }
                              >
                                {!c?.is_collapse
                                  ? t("common.more")
                                  : t("common.less")}
                              </button>
                            </div>
                          </Col>

                          <Col md={5} xs={12}>
                            <div className='career_img'>
                              <img src={transformImg(c?.image)} alt='...' />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ),
                )
              ) : (
                <div className='text-center'>{t("common.noDataFound")}</div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
};

export default CareerPage;
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import {
  getTopSchools,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import "../HomePage/index.scss";
import "./index.scss";

import { noImage } from "../../utils/ApiServices";
import { useTranslation } from "react-i18next";
import { paragraph } from "../../utils/utils";

const CareerPage1 = () => {
  const dispatch = useDispatch();
  const { topSchools, courseSector } = useSelector(
    (state) => state.careerReducer,
  );
  const { t } = useTranslation();
  const { lan } = useSelector((state) => state.languageReducer);

  useEffect(() => {
    dispatch(reSetFilterValue());
    dispatch(getTopSchools());
  }, [dispatch, lan]);

  const transformImg = (image) => {
    return image ? image : noImage;
  };

  const handleCollapse = (id, checked) => {
    dispatch(toggleCollapseValue(id, checked ? false : true, "topSchools"));
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='schools' />

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit noselect'>
            <h2>{t("careerTopSchools.heading.1")}</h2>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='schools'
                states={{
                  name: t("careerTopSchools.listItems.1"),
                  rows: topSchools?.state_list,
                }}
                ownership={courseSector}
                educationBoard={{
                  name: t("careerTopSchools.listItems.2"),
                  rows: topSchools?.board_list || [],
                }}
              />
            </Col>

            <Col md={8} xs={12}>
              {topSchools?.result?.length > 0 ? (
                topSchools?.result?.map(
                  (c) =>
                    c?.name && (
                      <div
                        className='career_box noselect'
                        style={{ height: "auto" }}
                      >
                        <Row>
                          <Col md={7} xs={12}>
                            <div className='top_col_content'>
                              <h3>{c?.name || t("common.n/a")}</h3>
                              <p style={{ textTransform: "capitalize" }}>
                                {c?.city || t("common.n/a")},{" "}
                                {c?.state || t("common.n/a")} •{" "}
                                <span style={{ textTransform: "capitalize" }}>
                                  {c?.school_type || t("common.n/a")}
                                </span>
                              </p>
                              <ul>
                                <li>
                                  <span>{t("careerTopSchools.other.1")}</span> :{" "}
                                  {c?.board_type || t("common.n/a")}{" "}
                                </li>

                                <li>
                                  <span>{t("careerTopSchools.other.2")}</span> :{" "}
                                  {c?.contact_no || t("common.n/a")}{" "}
                                </li>
                                <li>
                                  <span>{t("careerTopSchools.other.3")}</span> :{" "}
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
                                        {t("careerTopSchools.other.7")}
                                      </span>{" "}
                                      : {c?.address ? paragraph(c.address).map(
                                            (o) => <p>{o}</p>,
                                          ) : t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopSchools.other.4")}
                                      </span>{" "}
                                      : {c?.email || t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopSchools.other.5")}
                                      </span>{" "}
                                      : {c?.established_year || t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopSchools.other.6")}
                                      </span>{" "}
                                      : {c?.about_school || t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopSchools.other.8")}
                                      </span>{" "}
                                      : {c?.gender_intech || t("common.n/a")}
                                    </li>
                                    <li>
                                      <span>
                                        {t("careerTopSchools.other.9")}
                                      </span>{" "}
                                      : {c?.level || t("common.n/a")}
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
                              <img srcSet={transformImg(c?.image)} alt='...' />
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

export default CareerPage1;
